"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";

const languages = [
  { code: "en", short: "EN", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "fr", short: "FR", label: "French", nativeLabel: "Français", dir: "ltr" },
  { code: "es", short: "ES", label: "Spanish", nativeLabel: "Español", dir: "ltr" },
  { code: "ms", short: "MS", label: "Malay", nativeLabel: "Bahasa Melayu", dir: "ltr" },
  { code: "zh-CN", short: "ZH", label: "Chinese", nativeLabel: "中文", dir: "ltr" },
  { code: "ar", short: "AR", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
  { code: "kk", short: "KK", label: "Central Asia", nativeLabel: "Қазақша", dir: "ltr" }
];

function getCookieDomain() {
  if (typeof window === "undefined") return "";

  const { hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1") return "";
  if (hostname.endsWith("venueredesign.com")) return ";domain=.venueredesign.com";
  return "";
}

function setTranslateCookie(languageCode) {
  const cookieDomain = getCookieDomain();
  const value = languageCode === "en" ? "/en/en" : `/en/${languageCode}`;
  const cookie = `googtrans=${value};path=/;max-age=31536000${cookieDomain};SameSite=Lax`;
  document.cookie = cookie;
}

function triggerGoogleTranslate(languageCode) {
  const combo = document.querySelector(".goog-te-combo");
  if (!combo) return false;

  combo.value = languageCode;
  combo.dispatchEvent(new Event("change"));
  return true;
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState("en");

  const active = useMemo(
    () => languages.find((language) => language.code === activeLanguage) || languages[0],
    [activeLanguage]
  );

  useEffect(() => {
    const languageFromUrl = new URLSearchParams(window.location.search).get("site-language");
    const savedLanguage = languageFromUrl || window.localStorage.getItem("site-language") || "en";
    const selected = languages.some((language) => language.code === savedLanguage) ? savedLanguage : "en";
    setActiveLanguage(selected);
    window.localStorage.setItem("site-language", selected);
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
      window.history.replaceState({}, "", cleanUrl.toString());
    }
  }, []);

  function getLanguageHref(languageCode) {
    return `?site-language=${languageCode}`;
  }

  function selectLanguage(event, language) {
    event.preventDefault();
    setActiveLanguage(language.code);
    window.localStorage.setItem("site-language", language.code);
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
    setTranslateCookie(language.code);
    document.querySelector(".language-switcher")?.removeAttribute("open");

    const translated = triggerGoogleTranslate(language.code);
    if (!translated) {
      window.setTimeout(() => {
        if (!triggerGoogleTranslate(language.code)) {
          window.location.reload();
        }
      }, 700);
    }
  }

  return (
    <details className="language-switcher">
      <summary
        className="language-toggle"
        aria-label={`Change website language, current language ${active.label}`}
      >
        <Globe2 size={17} />
        <span>{active.short}</span>
        <ChevronDown size={14} />
      </summary>
      <div id="google_translate_element" className="google-translate-root" aria-hidden="true" />
      <div className="language-menu" role="listbox" aria-label="Website language">
        {languages.map((language) => (
          <a
            className="language-option"
            href={getLanguageHref(language.code)}
            role="option"
            aria-selected={language.code === activeLanguage}
            key={language.code}
            onClick={(event) => selectLanguage(event, language)}
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
