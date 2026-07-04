export const GOOGLE_ADS_ID = "AW-18264996527";

const leadConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL;
const whatsappConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL;

function getWindow() {
  return typeof window === "undefined" ? null : window;
}

function ensureDataLayer() {
  const browserWindow = getWindow();
  if (!browserWindow) return null;

  browserWindow.dataLayer = browserWindow.dataLayer || [];
  browserWindow.gtag =
    browserWindow.gtag ||
    function gtag() {
      browserWindow.dataLayer.push(arguments);
    };

  return browserWindow;
}

export function trackGoogleAdsEvent(eventName, params = {}) {
  const browserWindow = ensureDataLayer();
  if (!browserWindow) return;

  browserWindow.gtag("event", eventName, {
    send_to: GOOGLE_ADS_ID,
    ...params
  });
}

export function trackGoogleAdsConversion(label, params = {}) {
  if (!label) return;

  const browserWindow = ensureDataLayer();
  if (!browserWindow) return;

  browserWindow.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...params
  });
}

export function trackLeadSubmission(source = "inquiry_form") {
  trackGoogleAdsEvent("generate_lead", {
    event_category: "lead",
    event_label: source,
    lead_source: source
  });

  trackGoogleAdsConversion(leadConversionLabel, {
    value: 1.0,
    currency: "USD",
    event_label: source
  });
}

export function trackWhatsAppClick(source = "whatsapp_link") {
  trackGoogleAdsEvent("whatsapp_click", {
    event_category: "contact",
    event_label: source,
    contact_method: "whatsapp"
  });

  trackGoogleAdsConversion(whatsappConversionLabel, {
    value: 1.0,
    currency: "USD",
    event_label: source
  });
}
