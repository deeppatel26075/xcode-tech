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
  },
  {
    id: "property-pro-crm",
    title: "PropertyPro CRM",
    category: "Real Estate Technology",
    description: "An automated real estate lead nurturing and listing CRM.",
    longDescription: "Challenge:\nChaotic lead management, outdated listings, and inconsistent communication loops caused high bounce rates.\n\nSolution:\nWe developed PropertyPro CRM to centralize listings, automate follow-up emails, and provide instant agent messaging tools.",
    client: "Cortax Real Estate Partners",
    duration: "3 Months",
    services: ["CRM Development", "Lead Automation", "Notification Systems"],
    features: ["Listing Management", "Lead Tracking System", "Automated Email Sequences", "Central Communication Dashboard"],
    results: [
      "Unified listing data across agents.",
      "Automated lead tracking reduced manual follow-ups.",
      "Enhanced buyer response times by 40%."
    ],
    dashboardStats: [
      { label: "Response Time", value: "<15 mins", change: "Down from 4 hours" },
      { label: "Lead Conversion", value: "+28%", change: "In first 30 days" },
      { label: "Active Listings", value: "5,000+", change: "Synced real-time" }
    ],
    image: "/projects/restaurant-platform.jpg",
    challengeDetail: "Chaotic lead management, outdated listings, and inconsistent communication loops caused high bounce rates.",
    solutionDetail: "We developed PropertyPro CRM to centralize listings, automate follow-up emails, and provide instant agent messaging tools.",
    businessImpact: "An automated real estate lead nurturing and listing CRM."
  },
  {
    id: "fasttrack-delivery-fleet",
    title: "FastTrack Delivery",
    category: "Logistics & Fleet Management",
    description: "AI-powered route optimization and real-time fleet tracking platform.",
    longDescription: "Challenge:\nInefficient manual route planning led to high fuel costs, shipping delays, and lack of real-time dispatcher visibility.\n\nSolution:\nWe engineered FastTrack, an AI-powered fleet management system featuring live vehicle tracking, automated client notifications, and smart route planning.",
    client: "SwiftLogistics Corp",
    duration: "4 Months",
    services: ["AI Route Optimization", "IoT Integration", "Real-Time Tracking"],
    features: ["AI Routing Core", "Live Dispatcher Map", "Automated SMS/Email Alerts", "Driver Mobile Panel"],
    results: [
      "Decreased total fuel consumption by 18%.",
      "Reduced delivery delays through dynamic routing.",
      "Enhanced customer transparency via tracking links."
    ],
    dashboardStats: [
      { label: "Fuel Savings", value: "18%", change: "Average monthly drop" },
      { label: "On-Time Delivery", value: "98.6%", change: "Up from 87%" },
      { label: "Tracking Latency", value: "<3s", change: "Real-time updates" }
    ],
    image: "/projects/restaurant-platform.jpg",
    challengeDetail: "Inefficient manual route planning led to high fuel costs, shipping delays, and lack of real-time dispatcher visibility.",
    solutionDetail: "We engineered FastTrack, an AI-powered fleet management system featuring live vehicle tracking, automated client notifications, and smart route planning.",
    businessImpact: "AI-powered route optimization and real-time fleet tracking platform."
  },
  {
    id: "urban-style-ecommerce",
    title: "Urban Style E-commerce",
    category: "Retail & E-commerce",
    description: "Unified headless commerce storefront with automated order routing.",
    longDescription: "Challenge:\nInventory management errors, overselling, and fulfillment delays caused negative reviews and order cancelation rates.\n\nSolution:\nWe deployed a headless e-commerce store with real-time multi-warehouse inventory sync and automated order routing workflows.",
    client: "Urban Style Fashion House",
    duration: "3.5 Months",
    services: ["Headless Commerce Storefront", "Inventory Sync Systems", "Order Routing"],
    features: ["Fast Next.js Storefront", "Multi-Warehouse Sync Engine", "Payment Gateway Integration", "Shipping Tracker API"],
    results: [
      "Eliminated multi-selling errors entirely.",
      "Accelerated order processing times by 35%.",
      "Sub-second product catalog loading speed."
    ],
    dashboardStats: [
      { label: "Catalog Load Speed", value: "150ms", change: "Fast edge rendering" },
      { label: "Overselling Errors", value: "0%", change: "Real-time catalog lock" },
      { label: "Processing Time", value: "-35%", change: "Automated routing" }
    ],
    image: "/projects/restaurant-platform.jpg",
    challengeDetail: "Inventory management errors, overselling, and fulfillment delays caused negative reviews and order cancelation rates.",
    solutionDetail: "We deployed a headless e-commerce store with real-time multi-warehouse inventory sync and automated order routing workflows.",
    businessImpact: "Unified headless commerce storefront with automated order routing."
  },
  {
    id: "nova-analytics-dashboard",
    title: "Nova Analytics Dashboard",
    category: "Business Intelligence",
    description: "Unified BI dashboard consolidating data from fragmented enterprise systems.",
    longDescription: "Challenge:\nOperations teams spent days manual-gathering data from sales CRM, accounting software, and inventory databases for reports.\n\nSolution:\nWe created a unified analytics platform that pulls data through REST/GraphQL APIs and generates visual charts automatically.",
    client: "Nova Enterprise Systems",
    duration: "2.5 Months",
    services: ["API Consolidation", "Business Intelligence", "Interactive Charts"],
    features: ["Custom API Aggregator", "Dynamic Visual Dashboards", "Automated PDF Report Generator", "User Permission Controls"],
    results: [
      "Saved dozens of employee hours weekly on report generation.",
      "Allowed instant data-driven executive decisions.",
      "Aggregates data cleanly in under 2 seconds."
    ],
    dashboardStats: [
      { label: "Reporting Time", value: "0 mins", change: "Fully automated" },
      { label: "Data Aggregation", value: "<2s", change: "From 5 APIs" },
      { label: "Time Saved / Week", value: "15 Hours", change: "Per team member" }
    ],
    image: "/projects/restaurant-platform.jpg",
    challengeDetail: "Operations teams spent days manual-gathering data from sales CRM, accounting software, and inventory databases for reports.",
    solutionDetail: "We created a unified analytics platform that pulls data through REST/GraphQL APIs and generates visual charts automatically.",
    businessImpact: "Unified BI dashboard consolidating data from fragmented enterprise systems."
  }
];
