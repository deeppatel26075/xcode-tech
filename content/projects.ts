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
    title: "Commerce Intelligence Platform",
    category: "Commerce Engineering",
    description: "A scalable commerce architecture demonstrating how digital businesses can operate efficiently.",
    longDescription: "Challenge:\nModern retailers need connected systems beyond basic online stores. Standard storefront builders suffer latency spikes, checkout drop-offs, and inflexible custom logic frameworks.\n\nSolution:\nWe built a headless commerce system featuring a complete management dashboard, fast checkout pipelines, and real-time inventory synchronizations.",
    client: "Gastronomy Group",
    duration: "3 Months",
    services: ["Commerce Infrastructure", "API Integrations", "Database Performance"],
    features: ["Storefront Architecture", "Inventory Workflows", "Order Management", "Analytics Dashboard", "Customer Experience Layer"],
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
    challengeDetail: "Modern retailers need connected systems beyond basic online stores.",
    solutionDetail: "We engineered a complete storefront architecture integrated with real-time inventory workflows, order management, and a custom analytics dashboard.",
    businessImpact: "A scalable commerce architecture demonstrating how digital businesses can operate efficiently."
  },
  {
    id: "xai-operations-platform",
    title: "AI Document Intelligence Engine",
    category: "Intelligent Systems",
    description: "Demonstrates intelligent automation for operational efficiency.",
    longDescription: "Challenge:\nBusinesses lose time processing repetitive documents manually. Teams lose hundreds of hours parsing documents, classifying requests, and typing entries into legacy databases.\n\nSolution:\nWe deployed customized cognitive AI pipelines that ingest unstructured invoices and route them with automated validations.",
    client: "Logix Enterprise Solutions",
    duration: "4 Months",
    services: ["AI Integrations", "Workflow Automation", "Machine Learning"],
    features: ["AI Extraction Pipeline", "Validation System", "Workflow Automation", "Review Dashboard"],
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
    challengeDetail: "Businesses lose time processing repetitive documents manually.",
    solutionDetail: "We deployed an end-to-end AI extraction pipeline with a validation system, automated workflows, and a review dashboard.",
    businessImpact: "Demonstrates intelligent automation for operational efficiency."
  }
];
