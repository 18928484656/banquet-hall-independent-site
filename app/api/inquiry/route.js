import tls from "tls";
import { NextResponse } from "next/server";
import { company } from "../../data/company";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function encodeHeader(value) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function escapeSmtpData(value) {
  return value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST || "smtp.qq.com",
    port: Number(process.env.SMTP_PORT || 465),
    user: process.env.SMTP_USER || company.email,
    pass: process.env.SMTP_PASS || "",
    from: process.env.MAIL_FROM || process.env.SMTP_USER || company.email,
    to: process.env.MAIL_TO || company.email
  };
}

function createEmailBody(inquiry) {
  return [
    "New banquet hall project inquiry",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone / WhatsApp: ${inquiry.phone}`,
    `Company: ${inquiry.company || "-"}`,
    `Country / Region: ${inquiry.country || "-"}`,
    `Project Requirement: ${inquiry.requirement || "-"}`,
    "",
    "Message:",
    inquiry.message || "-",
    "",
    `Submitted At: ${inquiry.createdAt}`,
    `Website: ${company.website}`,
    `Route To: ${inquiry.routeTo}`
  ].join("\n");
}

async function sendSmtpMail({ to, from, subject, text }) {
  const config = getSmtpConfig();

  if (!config.pass) {
    throw new Error("SMTP_PASS is not configured.");
  }

  const socket = tls.connect({
    host: config.host,
    port: config.port,
    servername: config.host
  });

  socket.setEncoding("utf8");

  let buffer = "";
  const waitForResponse = () =>
    new Promise((resolve, reject) => {
      const onData = (chunk) => {
        buffer += chunk;
        const lines = buffer.split(/\r?\n/);
        const lastComplete = lines.slice(0, -1).reverse().find((line) => /^\d{3} /.test(line));

        if (!lastComplete) return;

        socket.off("data", onData);
        socket.off("error", onError);
        const response = buffer;
        buffer = lines.at(-1) || "";
        const code = Number(lastComplete.slice(0, 3));
        resolve({ code, response });
      };

      const onError = (error) => {
        socket.off("data", onData);
        reject(error);
      };

      socket.on("data", onData);
      socket.once("error", onError);
    });

  const command = async (line, expectedCodes) => {
    socket.write(`${line}\r\n`);
    const result = await waitForResponse();
    if (!expectedCodes.includes(result.code)) {
      throw new Error(`SMTP command failed: ${line} -> ${result.response}`);
    }
  };

  await waitForResponse();
  await command(`EHLO ${company.domain}`, [250]);
  await command("AUTH LOGIN", [334]);
  await command(Buffer.from(config.user).toString("base64"), [334]);
  await command(Buffer.from(config.pass).toString("base64"), [235]);
  await command(`MAIL FROM:<${from}>`, [250]);
  await command(`RCPT TO:<${to}>`, [250, 251]);
  await command("DATA", [354]);

  const message = [
    `From: ${encodeHeader(company.legalName)} <${from}>`,
    `To: ${to}`,
    `Reply-To: ${inquiryReplyHeader(text)}`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    text
  ].join("\r\n");

  socket.write(`${escapeSmtpData(message)}\r\n.\r\n`);
  const dataResult = await waitForResponse();
  if (dataResult.code !== 250) {
    throw new Error(`SMTP DATA failed: ${dataResult.response}`);
  }

  socket.write("QUIT\r\n");
  socket.end();
}

function inquiryReplyHeader(text) {
  const match = text.match(/^Email:\s*(.+)$/m);
  return match ? match[1].trim() : company.email;
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const inquiry = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone || body.whatsapp),
      company: clean(body.company),
      country: clean(body.country),
      requirement: clean(body.requirement || body.projectType),
      message: clean([body.size ? `Venue Size: ${body.size}` : "", body.message].filter(Boolean).join("\n\n")),
      routeTo: company.email,
      createdAt: new Date().toISOString()
    };

    const errors = {};

    if (!inquiry.name) errors.name = "Name is required.";
    if (!inquiry.email) errors.email = "Email is required.";
    if (inquiry.email && !emailPattern.test(inquiry.email)) errors.email = "Email format is invalid.";
    if (!inquiry.phone) errors.phone = "Phone is required.";
    if (inquiry.phone && !phonePattern.test(inquiry.phone)) errors.phone = "Phone format is invalid.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    await sendSmtpMail({
      to: getSmtpConfig().to,
      from: getSmtpConfig().from,
      subject: `New Banquet Hall Inquiry - ${inquiry.name} - ${inquiry.country || "Unknown Country"}`,
      text: createEmailBody(inquiry)
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry email error:", error);
    const emailNotConfigured = error.message?.includes("SMTP_PASS");

    return NextResponse.json(
      {
        ok: false,
        code: emailNotConfigured ? "EMAIL_NOT_CONFIGURED" : "EMAIL_SEND_FAILED",
        message: emailNotConfigured
          ? "Email service is not configured yet."
          : "Unable to send inquiry email.",
        fallback: {
          email: company.email,
          whatsapp: company.whatsappLeadHref
        }
      },
      { status: 500 }
    );
  }
}
