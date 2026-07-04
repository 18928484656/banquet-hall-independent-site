"use client";

import { useEffect } from "react";
import { trackWhatsAppClick } from "../lib/googleAds";

export default function GoogleAdsTracker() {
  useEffect(() => {
    function handleDocumentClick(event) {
      const link = event.target.closest?.("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (!href.includes("wa.me/")) return;

      const source =
        link.getAttribute("aria-label") ||
        link.textContent?.trim().replace(/\s+/g, " ") ||
        "whatsapp_link";

      trackWhatsAppClick(source);
    }

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => document.removeEventListener("click", handleDocumentClick, { capture: true });
  }, []);

  return null;
}
