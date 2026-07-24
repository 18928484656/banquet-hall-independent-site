"use client";

import { useEffect } from "react";
import { isWhatsAppUrl } from "../lib/googleAds";

export default function GoogleAdsTracker() {
  useEffect(() => {
    function handleDocumentClick(event) {
      if (event.defaultPrevented || event.__whatsappConversionTracked) return;

      const link = event.target.closest?.("a[href]");
      if (!link) return;

      const href = link.href || link.getAttribute("href") || "";
      if (!isWhatsAppUrl(href)) return;

      event.__whatsappConversionTracked = true;
      event.preventDefault();
      event.stopPropagation();

      const targetMode = link.target === "_blank" ? "blank" : "same";

      if (typeof window.gtag_report_conversion === "function") {
        window.gtag_report_conversion(href, targetMode);
        return;
      }

      if (targetMode === "blank") {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    }

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => document.removeEventListener("click", handleDocumentClick, { capture: true });
  }, []);

  return null;
}
