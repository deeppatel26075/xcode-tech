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
  image: string; // Will generate or describe mockup layout
}

export const projects: Project[] = [
  {
    id: "nova-ai-platform",
    title: "Nova AI Platform",
    category: "AI Automation",
    description: "An intelligent AI ecosystem helping companies automate workflows, communication, and business operations.",
    longDescription: "Nova AI Platform was engineered for enterprise clients to streamline repetitive tasks and orchestrate dynamic workflows. By integrating custom LLMs with legacy APIs, we transformed operational bottlenecks into sleek automated pipelines, reducing manual processing times significantly.",
    client: "Acme Enterprise Corp",
    duration: "4 Months",
    services: ["AI Chatbots", "AI Integration", "Workflow Automation"],
    features: ["AI Assistant", "Automation Engine", "Analytics Dashboard"],
    results: [
      "98% efficiency gain in daily operations",
      "Saved 40+ hours per week per department",
      "Successful handling of 500k+ monthly automated actions"
    ],
    dashboardStats: [
      { label: "Efficiency Boost", value: "+98%", change: "vs last quarter" },
      { label: "Tasks Automated", value: "840K", change: "Active instances" },
      { label: "Response Time", value: "0.2s", change: "Average speed" }
    ],
    image: "/projects/nova-ai.jpg"
  },
  {
    id: "arvik-commerce",
    title: "Arvik Commerce",
    category: "E-commerce Technology",
    description: "Premium commerce ecosystem with store management, payments, inventory, and analytics.",
    longDescription: "Arvik Commerce was designed for modern retailers seeking a headless, lighting-fast shopping experience. Built on a serverless edge architecture, it handles flash-sale traffic spikes with sub-second page loads globally while consolidating multiple legacy inventory channels.",
    client: "Arvik Retail Ltd",
    duration: "6 Months",
    services: ["E-commerce", "Web Applications", "UI/UX Design"],
    features: ["Store Management", "Unified Payments Gateway", "Real-time Inventory Sync", "Advanced Analytics Dashboard"],
    results: [
      "140% increase in checkout conversions",
      "Sub-200ms server response times globally",
      "Zero downtime during seasonal peak sales"
    ],
    dashboardStats: [
      { label: "Conversion Rate", value: "4.8%", change: "+2.1% improvement" },
      { label: "Load Time", value: "180ms", change: "Global average" },
      { label: "Sales Growth", value: "+320%", change: "Year-over-year" }
    ],
    image: "/projects/arvik-commerce.jpg"
  },
  {
    id: "medflow-healthcare",
    title: "MedFlow Healthcare",
    category: "Enterprise Software",
    description: "Healthcare management platform improving operations and patient experiences.",
    longDescription: "MedFlow is a secure, HIPAA-compliant patient care portal and facility manager. It leverages real-time queue-prediction algorithms and smart scheduling to optimize resource utilization and provide a frictionless interface for medical professionals and patients alike.",
    client: "MedFlow Network Inc",
    duration: "8 Months",
    services: ["Custom Software", "SaaS Platforms", "Business Applications"],
    features: ["Patient Portal", "Facility Operations Board", "Queue Analytics Engine"],
    results: [
      "35% reduction in patient wait times",
      "Eliminated patient onboarding paperwork through digital signature automation",
      "Highly secure medical records access with multi-tier encryption"
    ],
    dashboardStats: [
      { label: "Wait Time", value: "-35%", change: "vs previous system" },
      { label: "Patients Served", value: "12,000+", change: "Daily average" },
      { label: "Patient Rating", value: "4.9/5.0", change: "Satisfaction score" }
    ],
    image: "/projects/medflow-health.jpg"
  },
  {
    id: "cloudops-control",
    title: "CloudOps Control",
    category: "Cloud Platform",
    description: "Cloud monitoring and deployment solution for modern infrastructure.",
    longDescription: "CloudOps Control acts as a single pane of glass for multi-cloud deployments. It integrates seamlessly with AWS, Google Cloud, and Kubernetes, utilizing AI anomaly detection to flag security vulnerabilities and optimize resource sizing automatically.",
    client: "Velo Technologies",
    duration: "5 Months",
    services: ["Cloud Deployment", "CI/CD & DevOps", "Monitoring & optimization"],
    features: ["Multi-cloud Monitoring", "Automated CI/CD Pipelines", "Intelligent Cost Optimization Alerts"],
    results: [
      "42% average reduction in monthly cloud costs",
      "Automated deployment rollbacks for failed health checks",
      "Unified compliance reporting across AWS and Google Cloud"
    ],
    dashboardStats: [
      { label: "Cloud Costs", value: "-42%", change: "Avg cost reduction" },
      { label: "Uptime SLA", value: "99.99%", change: "Zero incidents" },
      { label: "Deploy Time", value: "1.2m", change: "Build pipeline speed" }
    ],
    image: "/projects/cloudops-control.jpg"
  },
  {
    id: "finsmart-analytics",
    title: "FinSmart Analytics",
    category: "Business Intelligence",
    description: "AI-powered analytics platform helping companies make smarter decisions.",
    longDescription: "FinSmart Analytics translates complex transactional data streams into actionable operational intelligence. Using predictive analytics models, financial departments can forecast cash flows, assess investment risks, and view unified multi-currency balances in real-time.",
    client: "FinSmart Partners Group",
    duration: "3.5 Months",
    services: ["Business Analysis", "SaaS Platforms", "AI Integration"],
    features: ["AI-powered Predictive Models", "Interactive Data Cubes", "Dynamic Financial Reports Builder"],
    results: [
      "Enabled real-time cash flow forecasting with 95% accuracy",
      "Consolidated financial records of 6 global subsidiaries into a unified ledger",
      "Reduced monthly bookkeeping close cycle from 10 days to 2 days"
    ],
    dashboardStats: [
      { label: "Forecast Accuracy", value: "95.4%", change: "Within +/- 0.5%" },
      { label: "Close Cycle", value: "2 Days", change: "Down from 10 days" },
      { label: "Assets Tracked", value: "$4.2B", change: "Real-time updates" }
    ],
    image: "/projects/finsmart-analytics.jpg"
  }
];
