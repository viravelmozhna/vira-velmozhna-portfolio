import type { Lang } from "./index";

/** UI/chrome strings (not long-form content — that lives in ../data). */
export const ui = {
  en: {
    "meta.title": "Vira Velmozhna — Frontend Developer",
    "meta.description":
      "Frontend Developer with 4+ years of commercial experience building modern web apps with React and TypeScript.",
    "meta.ogDescription":
      "React · TypeScript · 4+ years of commercial experience.",

    "nav.summary": "summary",
    "nav.experience": "experience",
    "nav.skills": "skills",
    "nav.projects": "projects",
    "nav.languages": "languages",
    "nav.education": "education",
    "nav.contact": "contact",

    "section.contact": "Contact",
    "section.experience": "Experience",
    "section.skills": "Technical skills",
    "section.languages": "Languages",
    "section.education": "Education",
    "section.projects": "Projects",

    "cv.download": "Download CV",
    "projects.view": "view →",
    "projects.open": "open →",

    "detail.back": "← projects",
    "detail.live": "Live demo",
    "detail.source": "Source code",

    "footer.note": "built for the web, tested on everything.",

    "consent.text":
      "This site uses Google Analytics to understand how visitors use it. Analytics cookies are only set if you accept.",
    "consent.accept": "Accept",
    "consent.decline": "Decline",

    "notfound.title": "404 — Vira Velmozhna",
    "notfound.text": "That project doesn't exist (or moved).",
    "notfound.back": "← Back to projects",

    "lang.switch": "Language",
    "lang.en": "EN",
    "lang.de": "DE",
  },
  de: {
    "meta.title": "Vira Velmozhna — Frontend-Entwicklerin",
    "meta.description":
      "Frontend-Entwicklerin mit über 4 Jahren Erfahrung in der Entwicklung moderner, responsiver Webanwendungen mit React und TypeScript.",
    "meta.ogDescription":
      "React · TypeScript · über 4 Jahre Erfahrung in agilen Umgebungen.",

    "nav.summary": "übersicht",
    "nav.experience": "erfahrung",
    "nav.skills": "skills",
    "nav.projects": "projekte",
    "nav.languages": "sprachen",
    "nav.education": "ausbildung",
    "nav.contact": "kontakt",

    "section.contact": "Kontakt",
    "section.experience": "Erfahrung",
    "section.skills": "Technische Skills",
    "section.languages": "Sprachen",
    "section.education": "Ausbildung",
    "section.projects": "Projekte",

    "cv.download": "CV herunterladen",
    "projects.view": "ansehen →",
    "projects.open": "öffnen →",

    "detail.back": "← projekte",
    "detail.live": "Live-Demo",
    "detail.source": "Quellcode",

    "footer.note": "fürs Web gebaut, auf allem getestet.",

    "consent.text":
      "Diese Website nutzt Google Analytics, um zu verstehen, wie Besucher sie nutzen. Analyse-Cookies werden nur mit Ihrer Zustimmung gesetzt.",
    "consent.accept": "Akzeptieren",
    "consent.decline": "Ablehnen",

    "notfound.title": "404 — Vira Velmozhna",
    "notfound.text": "Dieses Projekt existiert nicht (oder wurde verschoben).",
    "notfound.back": "← Zurück zu den Projekten",

    "lang.switch": "Sprache",
    "lang.en": "EN",
    "lang.de": "DE",
  },
} satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)["en"];

/** Returns a translator bound to a language, falling back to English. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.en[key];
  };
}
