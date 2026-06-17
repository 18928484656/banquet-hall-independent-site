import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { company } from "../../data/company";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
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
      phone: clean(body.phone),
      company: clean(body.company),
      country: clean(body.country),
      requirement: clean(body.requirement),
      message: clean(body.message),
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

    const storageDir = path.join(process.cwd(), "data");
    await mkdir(storageDir, { recursive: true });
    await appendFile(path.join(storageDir, "inquiries.jsonl"), `${JSON.stringify(inquiry)}\n`, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to submit inquiry." }, { status: 500 });
  }
}
