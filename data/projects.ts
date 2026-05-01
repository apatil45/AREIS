export interface Project {
  id: string;
  label: string;
  labelColor: string;
  accentColor: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  links: {
    github?: string | null;
    demo?: string | null;
    badge?: string | null;
  };
  showOn: ("homepage" | "services" | "consultancy")[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "arqive",
    label: "RAG · DOCUMENT INTELLIGENCE",
    labelColor: "var(--accent)",
    accentColor: "var(--accent)",
    title: "ARQIVE",
    subtitle: "Document Intelligence API",
    description:
      "Production RAG system processing 1,000+ PDFs with semantic search. Achieves sub-500ms retrieval and 88% search precision on healthcare compliance documents. Three-level caching, JWT auth, comprehensive audit logging.",
    metrics: [
      { value: "88%", label: "search precision" },
      { value: "<500ms", label: "retrieval time" },
      { value: "1000+", label: "PDFs processed" },
    ],
    tags: ["FastAPI", "BERT", "ChromaDB", "RAG", "AWS S3", "Docker"],
    links: {
      // TODO: replace with real URL
      github: "https://github.com/arpitpatil/arqive",
      // TODO: add live demo URL once ARQIVE UI is deployed
      demo: null,
      badge: "Demo coming",
    },
    showOn: ["homepage", "services"],
    featured: true,
  },
  {
    id: "electrify",
    label: "STARTUP · ACQUIRED",
    labelColor: "var(--accent-2)",
    accentColor: "var(--accent-2)",
    title: "Electrify Mobility",
    subtitle: "AI-Powered Assistive IoT System",
    description:
      "Co-founded an AI/IoT startup that received $6K government grant (DST-GoI), served 20+ users with mobility impairments, and was acquired. NLP interface handling 50+ command patterns with 85% reduction in dangerous misactivations. 99.5% uptime in production.",
    metrics: [
      { value: "85%", label: "misactivation reduction" },
      { value: "3", label: "patents (1 granted)" },
      { value: "99.5%", label: "uptime" },
    ],
    tags: ["spaCy", "NLP", "React Native", "FastAPI", "IoT", "PostgreSQL"],
    links: {
      badge: "Acquired",
    },
    showOn: ["homepage", "consultancy"],
    featured: true,
  },
  {
    id: "parkway",
    label: "FULL-STACK · MARKETPLACE",
    labelColor: "var(--accent-4)",
    accentColor: "var(--accent-4)",
    title: "Parkway",
    subtitle: "Full-Stack Parking Marketplace",
    description:
      "End-to-end marketplace with 28 REST APIs, Stripe payments, dynamic pricing algorithm, geospatial search, and Leaflet maps. 227 automated tests covering auth, payments, and booking flows.",
    metrics: [
      { value: "28", label: "REST APIs" },
      { value: "227", label: "automated tests" },
      { value: "100%", label: "E2E coverage" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Playwright", "Turborepo"],
    links: {
      // TODO: replace with real URL
      github: "https://github.com/arpitpatil/parkway",
      // TODO: replace with real URL
      demo: "https://parkway.vercel.app",
    },
    showOn: ["homepage", "services"],
    featured: true,
  },
  {
    id: "iitb",
    label: "RESEARCH · IEEE PUBLISHED",
    labelColor: "var(--text-dim)",
    accentColor: "var(--border-2)",
    title: "EV Motor Co-simulation",
    subtitle: "Research Intern — IIT Bombay",
    description:
      "Co-simulation framework for EV motors reducing solver calls by 60% through optimization and caching. Automated testing across 15+ configurations achieving 98% accuracy. Published in IEEE.",
    metrics: [
      { value: "60%", label: "solver call reduction" },
      { value: "98%", label: "test accuracy" },
      { value: "IEEE", label: "published" },
    ],
    tags: ["Python", "EV Systems", "Simulation", "Optimization", "IEEE"],
    links: {
      badge: "IEEE Published",
    },
    showOn: ["homepage"],
    featured: false,
  },
];
