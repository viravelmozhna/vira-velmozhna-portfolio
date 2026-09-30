import type { Lang } from "../i18n";

export interface Project {
  /** URL-safe id used in the route: /projects/:slug */
  slug: string;
  name: string;
  /** short one-liner shown on the card / row */
  description: string;
  /** longer intro shown on the case-study page (featured only) */
  tagline: string;
  tags: readonly string[];
  /** primary language, drives the little colored dot */
  language: string;
  languageColor: string;
  /** external links — leave empty string to hide the link */
  liveUrl: string;
  repoUrl: string;
  /**
   * Featured projects get a card + case-study page.
   * Compact ones render as a quiet list row (good for small side projects).
   */
  featured: boolean;
  /** optional screenshot path (put files in /public and reference as "/shots/foo.png") */
  screenshot?: string;
  /** case-study content — only used for featured projects */
  caseStudy: {
    heading: string;
    /** each entry is a paragraph; prefix with "- " to render as a bullet */
    body: string[];
  }[];
}

/** Shared non-translated fields for each project. */
const shared = {
  "collab-plan": {
    slug: "collab-plan",
    name: "collab-plan",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Express",
      "MongoDB",
      "JWT",
      "Vercel",
      "Render",
    ],
    language: "TypeScript",
    languageColor: "#3178c6",
    liveUrl: "https://collab-plan.vercel.app",
    repoUrl: "https://github.com/viravelmozhna/collab-plan",
    featured: true,
    screenshot: "/shots/collab-plan.png",
  },
  "knittedstorybears": {
    slug: "knittedstorybears",
    name: "knittedstorybears",
    tags: [
      "Astro",
      "TypeScript",
      "Markdown",
      "Node.js",
      "sharp",
      "Remark42",
      "Docker",
      "Caddy",
    ],
    language: "Astro",
    languageColor: "#ff5a03",
    liveUrl: "https://www.knittedstorybears.com/",
    repoUrl: "https://github.com/viravelmozhna/knittedstorybears",
    featured: true,
    screenshot: "/shots/knittedstorybears.png",
  },
  "volunteer-coordination-app": {
    slug: "volunteer-coordination-app",
    name: "help2gether",
    tags: [
      "Vue.js",
      "Vuex",
      "Vue Router",
      "BootstrapVue",
      "Firebase Auth",
      "Realtime Database",
      "Firebase Hosting",
      "Leaflet",
      "OpenStreetMap",
      "Photon",
    ],
    language: "Vue",
    languageColor: "#41b883",
    liveUrl: "https://help2gether-a15a6.web.app/",
    repoUrl: "",
    featured: true,
  },
  "weather-app": {
    slug: "weather-app",
    name: "weather-app",
    tags: ["Angular", "RxJS", "SCSS", "Figma", "REST API"],
    language: "TypeScript",
    languageColor: "#3178c6",
    liveUrl: "https://weather-app-cfd72.web.app/",
    repoUrl: "",
    featured: true,
  },
  "pegas-games": {
    slug: "pegas-games",
    name: "pegas-games",
    tags: ["HTML", "CSS", "JavaScript"],
    language: "JavaScript",
    languageColor: "#f1e05a",
    liveUrl: "https://pegasgames.com/",
    repoUrl: "",
    featured: false,
  },
  "mana-potion-studios": {
    slug: "mana-potion-studios",
    name: "mana-potion-studios",
    tags: ["HTML", "CSS", "JavaScript"],
    language: "JavaScript",
    languageColor: "#f1e05a",
    liveUrl: "https://manapotionstudios.com/",
    repoUrl: "",
    featured: false,
  },
} as const;

type ProjectSlug = keyof typeof shared;

const copy: Record<
  Lang,
  Record<
    ProjectSlug,
    Pick<Project, "description" | "tagline" | "caseStudy">
  >
> = {
  en: {
    "collab-plan": {
      description:
        "Real-time collaborative to-do app — share a list and see every change instantly, no refresh needed.",
      tagline:
        "A full-stack monorepo with a Next.js frontend and an Express + Socket.IO backend, with a one-click guest demo.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Plan Together is a real-time collaborative to-do list. Share a list with another user and you both see tasks appear, change and get ticked off as it happens, without refreshing.",
            "Visitors can try it without signing up: \"Try the demo\" creates a throwaway guest account with a sample list.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Next.js 14 (App Router) frontend with TypeScript and Tailwind CSS",
            "- Express REST API with MongoDB (Mongoose) and JWT authentication",
            "- Real-time updates with Socket.IO — each list is a room, so task changes are pushed to everyone viewing it",
            "- List sharing by username, with owner and \"shared with me\" lists",
            "- Guest demo accounts seeded with a sample list and pruned automatically after 7 days",
            "- npm workspaces monorepo; frontend on Vercel, backend on Render, database on MongoDB Atlas",
          ],
        },
      ],
    },
    "knittedstorybears": {
      description:
        "Free crochet pattern blog, moved from Blogger to a fast static Astro site — with rounds you can tick off while you crochet and self-hosted comments.",
      tagline:
        "A static Astro site that replaced a Blogger blog: every post, photo and comment imported, old links kept working, and everything self-hosted.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Knitted Story Bears is a blog of free amigurumi crochet patterns — little animals, dolls and seasonal ornaments, with step-by-step photos for every round. It used to run on Blogger; I rebuilt it as a static site that is faster, easier to follow while crocheting, and fully under my control.",
            "There are no ads, analytics or tracking, and the whole site runs on my own server.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Astro static site, with each pattern written as a Markdown file in a content collection",
            "- Pattern pages made for crocheting: tap a round to tick it off (progress is saved in the browser), a \"Jump to a part\" menu, a print-friendly layout and a Pin it button",
            "- Collections, related patterns, a stitch guide and structured data for search engines",
            "- Node.js import script that moved every Blogger post, photo and comment into the new site, dropping link spam on the way",
            "- Permanent redirects from every old Blogger address, so search rankings and Pinterest pins keep working",
            "- Build-time photo processing with sharp: step photos grouped into grids and lazy-loaded without the page jumping",
            "- Self-hosted Remark42 comments in a locked-down Docker container — readers comment with just a name, no accounts",
            "- Served by Caddy with automatic HTTPS and no access logs",
          ],
        },
      ],
    },
    "volunteer-coordination-app": {
      description:
        "Volunteer aid coordination app — browse humanitarian needs, filter by category/urgency/status, and view them on a map.",
      tagline:
        "Individual internship project at Sigma Software — a Vue.js SPA for managing humanitarian aid requests in one place.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Help2Gether is a web app that helps volunteers manage humanitarian aid requests in one place — browse needs, filter by category, urgency, and status, and view them on a map. The idea came from the early months of the war in Ukraine, when people urgently needed food, clothing, and medicine.",
            "Built as an individual internship project at Sigma Software.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Product concept and UI sketches",
            "- Vue.js SPA with Vue Router and Vuex",
            "- UI with BootstrapVue",
            "- Firebase Authentication (sign up, login, password reset, profiles)",
            "- Firebase Realtime Database for creating, updating, and reading demands",
            "- Interactive map and address search with Leaflet, OpenStreetMap, and Photon",
            "- Public browse mode for guests (list + map) while keeping contact details (name/phone) private for logged-in users",
            "- Deployed with Firebase Hosting",
          ],
        },
      ],
    },
    "weather-app": {
      description:
        "Responsive weather app UI designed in Figma and implemented with Angular, RxJS and SCSS — including theme switching and API integration.",
      tagline:
        "Designed in Figma, then built with Angular, RxJS and SCSS during my internship at Sigma Software.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Designed and developed a responsive weather app UI in Figma, then implemented it using Angular, RxJS, and SCSS during my internship at Sigma Software.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Responsive UI designed in Figma",
            "- Implementation with Angular, RxJS and SCSS",
            "- Theme switching",
            "- Live API integration",
          ],
        },
      ],
    },
    "pegas-games": {
      description:
        "A small website I built to host and present a collection of classic browser games.",
      tagline: "",
      caseStudy: [],
    },
    "mana-potion-studios": {
      description:
        "Studio website for the indie game developer behind Becastled and Happy Room — a responsive games portfolio with release filters and a screenshot gallery.",
      tagline: "",
      caseStudy: [],
    },
  },
  de: {
    "collab-plan": {
      description:
        "Kollaborative To-do-App in Echtzeit — Liste teilen und jede Änderung sofort sehen, ganz ohne Neuladen.",
      tagline:
        "Full-Stack-Monorepo mit Next.js-Frontend und Express- + Socket.IO-Backend, inklusive Gast-Demo mit einem Klick.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Plan Together ist eine kollaborative To-do-Liste in Echtzeit. Wird eine Liste mit einer anderen Person geteilt, sehen beide sofort, wie Aufgaben hinzugefügt, geändert und abgehakt werden — ohne Neuladen.",
            "Ausprobieren geht ohne Registrierung: „Try the demo“ erstellt ein temporäres Gastkonto mit einer Beispielliste.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- Next.js-14-Frontend (App Router) mit TypeScript und Tailwind CSS",
            "- Express-REST-API mit MongoDB (Mongoose) und JWT-Authentifizierung",
            "- Echtzeit-Updates mit Socket.IO — jede Liste ist ein Room, Änderungen werden an alle Betrachter gepusht",
            "- Teilen von Listen per Benutzername, mit eigenen und geteilten Listen",
            "- Gastkonten mit Beispieldaten, die nach 7 Tagen automatisch gelöscht werden",
            "- Monorepo mit npm Workspaces; Frontend auf Vercel, Backend auf Render, Datenbank auf MongoDB Atlas",
          ],
        },
      ],
    },
    "knittedstorybears": {
      description:
        "Blog mit kostenlosen Häkelanleitungen, von Blogger auf eine schnelle statische Astro-Website umgezogen — mit Runden zum Abhaken beim Häkeln und selbst gehosteten Kommentaren.",
      tagline:
        "Eine statische Astro-Website als Ersatz für einen Blogger-Blog: alle Beiträge, Fotos und Kommentare übernommen, alte Links funktionieren weiter, alles selbst gehostet.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Knitted Story Bears ist ein Blog mit kostenlosen Amigurumi-Häkelanleitungen — kleine Tiere, Puppen und saisonale Anhänger, mit Schritt-für-Schritt-Fotos zu jeder Runde. Früher lief er auf Blogger; ich habe ihn als statische Website neu gebaut, die schneller ist, sich beim Häkeln leichter verfolgen lässt und vollständig in meiner Hand liegt.",
            "Es gibt keine Werbung, keine Analytics und kein Tracking, und die ganze Website läuft auf meinem eigenen Server.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- Statische Astro-Website, jede Anleitung als Markdown-Datei in einer Content Collection",
            "- Anleitungsseiten fürs Häkeln gemacht: Runden per Tippen abhaken (der Fortschritt bleibt im Browser gespeichert), ein Menü „Jump to a part“, druckfreundliches Layout und ein Pin-it-Button",
            "- Kollektionen, ähnliche Anleitungen, ein Maschen-Guide und strukturierte Daten für Suchmaschinen",
            "- Node.js-Importskript, das alle Blogger-Beiträge, Fotos und Kommentare übernommen und dabei Link-Spam aussortiert hat",
            "- Dauerhafte Weiterleitungen von allen alten Blogger-Adressen, damit Suchmaschinen-Rankings und Pinterest-Pins weiter funktionieren",
            "- Bildverarbeitung beim Build mit sharp: Schrittfotos als Raster, Lazy Loading ohne springende Seite",
            "- Selbst gehostete Remark42-Kommentare in einem abgesicherten Docker-Container — Kommentieren nur mit Namen, ohne Konten",
            "- Ausgeliefert über Caddy mit automatischem HTTPS und ohne Zugriffslogs",
          ],
        },
      ],
    },
    "volunteer-coordination-app": {
      description:
        "App zur Koordinierung humanitärer Hilfe — Bedarfe durchsuchen, nach Kategorie/Dringlichkeit/Status filtern und auf einer Karte anzeigen.",
      tagline:
        "Individuelles Praktikumsprojekt bei Sigma Software — eine Vue.js-SPA zur Verwaltung humanitärer Hilfsanfragen an einem Ort.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Help2Gether ist eine Web-App, die Freiwilligen hilft, humanitäre Hilfsanfragen an einem Ort zu verwalten — Bedarfe durchsuchen, nach Kategorie, Dringlichkeit und Status filtern und auf einer Karte anzeigen. Die Idee entstand in den ersten Kriegsmonaten in der Ukraine, als Menschen dringend Nahrung, Kleidung und Medikamente brauchten.",
            "Als individuelles Praktikumsprojekt bei Sigma Software entwickelt.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- Produktkonzept und UI-Skizzen",
            "- Vue.js-SPA mit Vue Router und Vuex",
            "- UI mit BootstrapVue",
            "- Firebase Authentication (Registrierung, Login, Passwort-Reset, Profile)",
            "- Firebase Realtime Database zum Erstellen, Aktualisieren und Lesen von Bedarfen",
            "- Interaktive Karte und Adresssuche mit Leaflet, OpenStreetMap und Photon",
            "- Öffentlicher Browse-Modus für Gäste (Liste + Karte), Kontaktangaben (Name/Telefon) nur für eingeloggte Nutzer",
            "- Deployment mit Firebase Hosting",
          ],
        },
      ],
    },
    "weather-app": {
      description:
        "Responsives Wetter-App-UI in Figma konzipiert und mit Angular, RxJS und SCSS umgesetzt — inkl. Theme-Umschaltung und API-Integration.",
      tagline:
        "In Figma gestaltet und mit Angular, RxJS und SCSS im Praktikum bei Sigma Software umgesetzt.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Konzeption und Entwicklung eines responsiven Wetter-App-UI in Figma mit anschließender Umsetzung in Angular, RxJS und SCSS im Praktikum bei Sigma Software.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- Responsives UI in Figma gestaltet",
            "- Umsetzung mit Angular, RxJS und SCSS",
            "- Theme-Umschaltung",
            "- API-Integration",
          ],
        },
      ],
    },
    "pegas-games": {
      description:
        "Eine kleine Website, die ich gebaut habe, um eine Sammlung klassischer Browser-Spiele zu hosten und zu präsentieren.",
      tagline: "",
      caseStudy: [],
    },
    "mana-potion-studios": {
      description:
        "Studio-Website für den Indie-Spieleentwickler hinter Becastled und Happy Room — ein responsives Spiele-Portfolio mit Release-Filtern und Screenshot-Galerie.",
      tagline: "",
      caseStudy: [],
    },
  },
};

function toProject(lang: Lang, slug: ProjectSlug): Project {
  return {
    ...shared[slug],
    ...copy[lang][slug],
  };
}

const slugs = Object.keys(shared) as ProjectSlug[];

export function getProjects(lang: Lang): Project[] {
  return slugs.map((slug) => toProject(lang, slug));
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  if (!(slug in shared)) return undefined;
  return toProject(lang, slug as ProjectSlug);
}

/** Featured project slugs — used by getStaticPaths for case-study pages. */
export const projectSlugs = slugs.filter((slug) => shared[slug].featured);
