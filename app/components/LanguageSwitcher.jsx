"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";

const languages = [
  { code: "kk", short: "KK", label: "Kazakh", nativeLabel: "Қазақша", dir: "ltr" },
  { code: "ru", short: "RU", label: "Russian", nativeLabel: "Русский", dir: "ltr" },
  { code: "en", short: "EN", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "ms", short: "MS", label: "Malay", nativeLabel: "Bahasa Melayu", dir: "ltr" },
  { code: "uz", short: "UZ", label: "Central Asia", nativeLabel: "O'zbekcha", dir: "ltr" },
  { code: "ar", short: "AR", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
  { code: "es", short: "ES", label: "Spanish", nativeLabel: "Español", dir: "ltr" },
  { code: "zh-CN", short: "ZH", label: "Chinese", nativeLabel: "中文", dir: "ltr" }
];

const defaultLanguage = "kk";
const defaultLanguageVersion = "kz-kk-2026-06-26";

function getCookieDomains() {
  if (typeof window === "undefined") return [""];

  const { hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1") return [""];
  if (hostname.endsWith("venueredesign.com")) return ["", ";domain=.venueredesign.com"];
  return [""];
}

function setTranslateCookie(languageCode) {
  const cookieDomains = getCookieDomains();
  const value = languageCode === "en" ? "/en/en" : `/en/${languageCode}`;

  cookieDomains.forEach((cookieDomain) => {
    document.cookie = `googtrans=${value};path=/;max-age=31536000${cookieDomain};SameSite=Lax`;
  });
}

function triggerGoogleTranslate(languageCode) {
  const combo = document.querySelector(".goog-te-combo");
  if (!combo) return false;

  combo.value = languageCode;
  combo.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

function buildLanguageUrl(languageCode) {
  if (typeof window === "undefined") return `?site-language=${languageCode}`;

  const url = new URL(window.location.href);
  url.searchParams.set("site-language", languageCode);
  url.searchParams.set("language-refresh", Date.now().toString());
  return url.toString();
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState(defaultLanguage);

  const active = useMemo(
    () => languages.find((language) => language.code === activeLanguage) || languages[0],
    [activeLanguage]
  );

  useEffect(() => {
    const languageFromUrl = new URLSearchParams(window.location.search).get("site-language");
    const storedLanguage = window.localStorage.getItem("site-language");
    const storedDefaultVersion = window.localStorage.getItem("site-language-default-version");
    const shouldUseNewDefault = !languageFromUrl && storedDefaultVersion !== defaultLanguageVersion;
    const savedLanguage = shouldUseNewDefault
      ? defaultLanguage
      : languageFromUrl || storedLanguage || defaultLanguage;
    const selected = languages.some((language) => language.code === savedLanguage) ? savedLanguage : defaultLanguage;
    setActiveLanguage(selected);
    window.localStorage.setItem("site-language", selected);
    window.localStorage.setItem("site-language-default-version", defaultLanguageVersion);
    setTranslateCookie(selected);

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map((language) => language.code).join(","),
          autoDisplay: false
        },
        "google_translate_element"
      );

      if (selected !== "en") {
        setTimeout(() => triggerGoogleTranslate(selected), 700);
        setTimeout(() => triggerGoogleTranslate(selected), 1600);
      }
    };

    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }

    document.documentElement.lang = selected;
    document.documentElement.dir = languages.find((language) => language.code === selected)?.dir || "ltr";

    if (languageFromUrl) {
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete("site-language");
      cleanUrl.searchParams.delete("language-refresh");
      window.history.replaceState({}, "", cleanUrl.toString());
    }
  }, []);

  function getLanguageHref(languageCode) {
    return buildLanguageUrl(languageCode);
  }

  function prepareLanguageChange(language) {
    setActiveLanguage(language.code);
    window.localStorage.setItem("site-language", language.code);
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
    setTranslateCookie(language.code);
    document.querySelector(".language-switcher")?.removeAttribute("open");

    triggerGoogleTranslate(language.code);
  }

  return (
    <details className="language-switcher notranslate" translate="no">
      <summary
        className="language-toggle notranslate"
        translate="no"
        aria-label={`Change website language, current language ${active.label}`}
      >
        <Globe2 size={17} />
        <span>{active.short}</span>
        <ChevronDown size={14} />
      </summary>
      <div id="google_translate_element" className="google-translate-root" aria-hidden="true" />
      <div className="language-menu notranslate" translate="no" role="listbox" aria-label="Website language">
        {languages.map((language) => (
          <a
            className="language-option notranslate"
            translate="no"
            href={getLanguageHref(language.code)}
            role="option"
            aria-selected={language.code === activeLanguage}
            key={language.code}
            onPointerDown={() => prepareLanguageChange(language)}
            onClick={() => prepareLanguageChange(language)}
          >
            <span>
              <strong>{language.nativeLabel}</strong>
              <small>{language.label}</small>
            </span>
            {language.code === activeLanguage ? <Check size={15} /> : null}
          </a>
        ))}
      </div>
    </details>
  );
}
