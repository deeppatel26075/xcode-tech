export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  client: string;
  duration: string;
  services: string[];
  features: string[];
  results: string[];
  dashboardStats: { label: string; value: string; change: string }[];
  image: string;
  challengeDetail: string;
  solutionDetail: string;
  businessImpact: string;
}

export const projects: Project[] = [
  {
    id: "xcommerce-engine",
    title: "XCommerce Engine",
    category: "Web & Commerce",
    description: "Scalable commerce infrastructure for modern businesses.",
    longDescription: "Challenge:\nStandard storefront builders suffer latency spikes, checkout drop-offs, and inflexible custom logic frameworks.\n\nSolution:\nWe built a headless commerce system featuring a complete management dashboard, fast checkout pipelines, and real-time inventory synchronizations.",
    client: "Gastronomy Group",
    duration: "3 Months",
    services: ["Commerce Infrastructure", "API Integrations", "Database Performance"],
    features: ["Next.js", "Node.js", "PostgreSQL", "Edge Hosting"],
    results: [
      "Designed to support seamless peak order loads.",
      "Integrates modern headless pipelines minimizing latency.",
      "Robust inventory sync dashboards keeping data aligned."
    ],
    dashboardStats: [
      { label: "Checkouts", value: "Optimized", change: "Latency under 200ms" },
      { label: "Security", value: "Secure", change: "Stripe & API guards" },
      { label: "Sync Engine", value: "Real-time", change: "Automated inventory" }
    ],
    image: "/projects/restaurant-platform.jpg",
    challengeDetail: "Standard e-commerce software fails to handle scale and requires slow, expensive custom work for checkout integrations.",
    solutionDetail: "We engineered a decoupled commerce layer featuring an interactive analytics dashboard, direct payment gates, and real-time inventory.",
    businessImpact: "Designed to process massive transactional volumes under peak load without database lag."
  },
  {
    id: "xai-operations-platform",
    title: "XAI Operations Platform",
    category: "Artificial Intelligence",
    description: "AI-powered workflow automation system.",
    longDescription: "Challenge:\nTeams lose hundreds of hours parsing documents, classifying requests, and typing entries into legacy databases.\n\nSolution:\nWe deployed customized cognitive AI pipelines that ingest unstructured invoices and route them with automated validations.",
    client: "Logix Enterprise Solutions",
    duration: "4 Months",
    services: ["AI Integrations", "Workflow Automation", "Machine Learning"],
    features: ["Python", "FastAPI", "AI Models", "Docker Containers"],
    results: [
      "Automates document classification workflows.",
      "Reduces manual entry errors by utilizing smart validations.",
      "Secure role-based controls protecting document access."
    ],
    dashboardStats: [
      { label: "AI Pipeline", value: "Cognitive", change: "Automated parsing" },
      { label: "Data Accuracy", value: "Tuned", change: "Custom prompts" },
      { label: "Integration", value: "APIs", change: "Seamless data routing" }
    ],
    image: "/projects/ai-assistant.jpg",
    challengeDetail: "Businesses lose hundreds of hours processing document data manually, causing bottlenecks in database indexing.",
    solutionDetail: "We deployed cognitive AI models, smart document parsers, and custom API pipelines with human-in-the-loop validation dashboards.",
    businessImpact: "Built to automate operations workflow pipelines while maintaining total accuracy."
  },
  {
    id: "xbusiness-cloud",
    title: "XBusiness Cloud",
    category: "Software Engineering",
    description: "Complete business management platform.",
    longDescription: "Challenge:\nGrowing companies suffer from database silos, scattered legacy portals, and slow manual reporting cycles.\n\nSolution:\nWe designed a unified internal operations platform featuring a secure CRM, custom user roles, dashboard reports, and data pipelines.",
    client: "Aegis Healthcare Network",
    duration: "5 Months",
    services: ["Internal Platforms", "Custom CRMs", "Database Security"],
    features: ["React.js", "Node.js", "PostgreSQL", "AWS Encrypted Cloud"],
    results: [
      "Consolidates operations databases into one dashboard.",
      "Implements role-based access safety configurations.",
      "Speeds up internal reporting metrics generation."
    ],
    dashboardStats: [
      { label: "Operations CRM", value: "Unified", change: "Single source of truth" },
      { label: "Access Security", value: "Encrypted", change: "Role boundaries" },
      { label: "Custom Reports", value: "Automated", change: "Generates in seconds" }
    ],
    image: "/projects/healthcare-system.jpg",
    challengeDetail: "Growing organizations suffer database fragmentation, poor role auditing, and slow custom reporting from disconnected tools.",
    solutionDetail: "We designed a secure, unified platform featuring a complete CRM, user access controls, real-time analytics, and automated reporting.",
    businessImpact: "Engineered to eliminate administrative lag and secure company datasets in one platform."
  }
];
