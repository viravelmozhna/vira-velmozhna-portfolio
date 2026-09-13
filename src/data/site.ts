import type { Lang } from "../i18n";

/** Contact / identity — shared across locales. */
export const contact = {
  name: "Vira Velmozhna",
  email: "mail@viravelmozhna.dev",
  linkedin: "https://www.linkedin.com/in/viravelmozhna/",
};

export interface SiteCopy {
  role: string;
  roleTagline: string;
  summary: string;
  location: string;
  cvPath: string;
}

const siteCopy: Record<Lang, SiteCopy> = {
  en: {
    role: "Frontend Developer",
    roleTagline: "React · TypeScript · 4+ years of commercial experience",
    summary:
      "Frontend Developer with 4+ years of commercial experience building production web applications with React and TypeScript. Led a migration to React 19 and maintain 94% test coverage with Vitest and Cypress, shipping twelve zero-downtime releases a year through Azure DevOps pipelines. Four years working remotely in distributed Agile teams, with professional proficiency in English and working German.",
    location: "Hanover, Germany",
    cvPath: "/vira-velmozhna-cv.pdf",
  },
  de: {
    role: "Frontend-Entwicklerin",
    roleTagline:
      "React · TypeScript · über 4 Jahre Erfahrung in agilen Umgebungen",
    summary:
      "Frontend-Entwicklerin mit über 4 Jahren Berufserfahrung in der Entwicklung produktiver Webanwendungen mit React und TypeScript. Leitung der Migration auf React 19, Testabdeckung von 94 % mit Vitest und Cypress sowie zwölf Releases pro Jahr ohne Ausfallzeit über CI/CD-Pipelines in Azure DevOps. Seit vier Jahren remote in einem verteilten, agilen Team (Scrum), mit verhandlungssicherem Englisch und Deutsch auf B1-Niveau.",
    location: "Hannover, Deutschland",
    cvPath: "/vira-velmozhna-lebenslauf.pdf",
  },
};

export function getSite(lang: Lang) {
  return { ...contact, ...siteCopy[lang] };
}

export interface ExperienceItem {
  hash: string;
  period: string;
  location: string;
  role: string;
  org: string;
  points: string[];
}

const experienceByLang: Record<Lang, ExperienceItem[]> = {
  en: [
    {
      hash: "#a9f31e2",
      period: "07.2022 → present",
      location: "remote",
      role: "Frontend Developer",
      org: "Sigma Software",
      points: [
        "Developed and maintained internal React and TypeScript applications to replace manual Excel workflows, streamlining configuration creation for complex telecom solutions and reducing sales managers' proposal preparation time from 24 to 13 days.",
        "Collaborated with UX/UI designers to build responsive interfaces using Sass/Less and an internal component library, ensuring strict compliance with semantic HTML and cross-browser compatibility.",
        "Worked with backend developers to integrate frontend components with server-side logic, ensuring seamless data flow and consistent application performance.",
        "Led the migration of project dependencies to modern React 19 and maintained build environments using Vite, while ensuring system stability and keeping comprehensive test coverage (94%) using Vitest and Cypress.",
        "Contributed to CI/CD pipelines in Azure DevOps, enabling 12 releases per year with zero downtime.",
      ],
    },
    {
      hash: "#4c02b7f",
      period: "02.2022 → 06.2022",
      location: "remote",
      role: "Intern Frontend Developer",
      org: "Sigma Software",
      points: [
        "Contributed to 2 frontend projects in a team setting, applying Agile workflows and version control with Git.",
        "Built a volunteer coordination app using Vue.js, implementing state management with Vuex and integrating Firebase Authentication and Realtime Database.",
        "Designed and developed a responsive weather app UI in Figma, then implemented it using Angular, RxJS, and SCSS, including theme switching and API integration.",
      ],
    },
  ],
  de: [
    {
      hash: "#a9f31e2",
      period: "07.2022 → aktuell",
      location: "remote",
      role: "Frontend-Entwicklerin",
      org: "Sigma Software",
      points: [
        "Entwicklung und Pflege interner React- und TypeScript-Anwendungen als Ersatz für manuelle Excel-Workflows, wodurch die Konfigurationserstellung für komplexe Telekommunikationslösungen gestrafft und die Bearbeitungszeit für Angebote von 24 auf 13 Tage verkürzt wurde.",
        "Zusammenarbeit mit UX/UI-Designern zur Erstellung responsiver Benutzeroberflächen unter Verwendung von Sass/Less und einer internen Komponentenbibliothek unter Einhaltung von semantischem HTML und plattformübergreifender Kompatibilität.",
        "Enge Zusammenarbeit mit Backend-Entwicklern zur Integration von Frontend-Komponenten mit serverseitiger Logik, um einen nahtlosen Datenfluss und eine konsistente Anwendungsleistung zu gewährleisten.",
        "Leitung der Migration von Projekt-Dependencies auf React 19 und Pflege der Build-Umgebungen mit Vite bei gleichzeitiger Sicherstellung der Systemstabilität und einer Testabdeckung von 94 % mittels Vitest und Cypress.",
        "Mitwirkung an CI/CD-Pipelines in Azure DevOps, was zwölf Releases pro Jahr ohne Ausfallzeiten ermöglichte.",
      ],
    },
    {
      hash: "#4c02b7f",
      period: "02.2022 → 06.2022",
      location: "remote",
      role: "Frontend-Entwicklerin (Praktikum)",
      org: "Sigma Software",
      points: [
        "Mitwirkung an 2 Frontend-Projekten im Team unter Anwendung agiler Arbeitsweisen und Versionskontrolle mit Git.",
        "Entwicklung einer App zur Koordinierung von Freiwilligen mit Vue.js, Implementierung des State Managements mit Vuex sowie Integration von Firebase Authentication und Realtime Database.",
        "Konzeption und Entwicklung eines responsiven Wetter-App-UI in Figma mit anschließender Umsetzung in Angular, RxJS und SCSS inklusive Theme-Umschaltung und API-Integration.",
      ],
    },
  ],
};

export function getExperience(lang: Lang) {
  return experienceByLang[lang];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

/** Tech names stay English; only the section chrome is translated. */
export const skillGroups: SkillGroup[] = [
  {
    name: '"languages_and_styling"',
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Sass/Less",
      "Styled Components",
    ],
  },
  {
    name: '"react_ecosystem"',
    items: ["React 18/19", "Hooks", "Context API", "React Router", "MobX"],
  },
  {
    name: '"testing"',
    items: ["Vitest", "Cypress"],
  },
  {
    name: '"backend_and_data"',
    items: ["Node.js", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    name: '"also_worked_with"',
    items: ["Next.js", "Vue.js (Vuex)", "Angular", "RxJS"],
  },
  {
    name: '"tools_and_workflow"',
    items: [
      "Vite",
      "Docker",
      "Git / GitHub",
      "ESLint",
      "Azure DevOps",
      "Jira",
      "Confluence",
      "Figma",
      "Agile/Scrum",
    ],
  },
  {
    name: '"ai_assisted_development"',
    items: ["Cursor", "GitHub Copilot", "Amazon Q", "Kiro"],
  },
];

export interface Language {
  name: string;
  level: string;
  width: string;
}

const languagesByLang: Record<Lang, Language[]> = {
  en: [
    { name: "English", level: "C1", width: "90%" },
    { name: "German", level: "B1", width: "64%" },
  ],
  de: [
    { name: "Englisch", level: "C1 · verhandlungssicher", width: "90%" },
    { name: "Deutsch", level: "B1 · in Weiterentwicklung", width: "64%" },
  ],
};

export function getLanguages(lang: Lang) {
  return languagesByLang[lang];
}

export interface Education {
  title: string;
  org: string;
  meta: string;
  topics: string;
}

const educationByLang: Record<Lang, Education[]> = {
  en: [
    {
      title: "Full Stack Developer",
      org: 'IT School "GoIT"',
      meta: "2021 – 2022 · Ukraine",
      topics: "Topics covered: HTML, CSS, JavaScript, React, Node.js",
    },
  ],
  de: [
    {
      title: "Full Stack Developer",
      org: 'IT School "GoIT"',
      meta: "2021 – 2022 · Ukraine",
      topics: "Schwerpunkte: HTML, CSS, JavaScript, React, Node.js",
    },
  ],
};

export function getEducation(lang: Lang) {
  return educationByLang[lang];
}
