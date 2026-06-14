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
    title: "Commerce Intelligence System",
    category: "Commerce Engineering",
    description: "High-performance transactional engine and real-time inventory systems.",
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
      { label: "API Latency", value: "<180ms", change: "Edge cache hits" },
      { label: "Load Capacity", value: "10k/min", change: "Stress tested" },
      { label: "Sync Speed", value: "Real-time", change: "Auto-inventory update" }
    ],
    image: "/projects/restaurant-platform.jpg",
    challengeDetail: "Legacy commerce platforms experience critical query latency, database locking, and fail during high-concurrency event drops.",
    solutionDetail: "We engineered a modular, edge-rendered Commerce Intelligence System featuring real-time cache syncs, Stripe API integrations, and analytics panels.",
    businessImpact: "Architected to process over 10,000 requests per minute with absolute database stability and sub-200ms API response loops."
  },
  {
    id: "xai-operations-platform",
    title: "AI Document Automation Engine",
    category: "Intelligent Systems",
    description: "Document intelligence and automatic OCR parsing pipelines.",
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
      { label: "Accuracy", value: "99.4%", change: "Human-in-the-loop audit" },
      { label: "Parse Time", value: "4s / doc", change: "Down from 12 mins" },
      { label: "Throughput", value: "50k/day", change: "Scalable queue" }
    ],
    image: "/projects/ai-assistant.jpg",
    challengeDetail: "Manual indexing of complex, unstructured business documents leaks operational efficiency and leads to database categorization errors.",
    solutionDetail: "We engineered a cognitive AI document processor integrating specialized LLM validation APIs, queue handlers, and visual dashboard triages.",
    businessImpact: "Automated over 85% of categorization overhead, shifting average invoice triaging duration from 12 minutes to 4 seconds."
  },
  {
    id: "xbusiness-cloud",
    title: "Cloud Operations Platform",
    category: "Cloud Engineering",
    description: "Unified enterprise platform managing cloud infrastructure resources and role safety.",
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
      { label: "Uptime", value: "99.99%", change: "Multi-region fallback" },
      { label: "Cloud Costs", value: "-30%", change: "Resource auto-scaling" },
      { label: "Security Vault", value: "IAM active", change: "Role boundaries" }
    ],
    image: "/projects/healthcare-system.jpg",
    challengeDetail: "Enterprise IT networks struggle to trace distributed cloud deployment expenses, role-level permissions, and real-time API logs.",
    solutionDetail: "We architected a centralized Cloud Operations Platform incorporating security vaults, IAM policies, and active server resource monitors.",
    businessImpact: "Reduced infrastructure costs by 30% through automated scaling policies and unified corporate security boundaries."
  }
];
