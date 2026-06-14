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
}

export const projects: Project[] = [
  {
    id: "smart-restaurant-platform",
    title: "Smart Restaurant Platform",
    category: "Web & Commerce",
    description: "Custom digital ordering platform with real-time administration boards, Stripe payments, and analytics.",
    longDescription: "Challenge:\nRestaurants need faster digital ordering solutions to handle high peak volumes without operational errors.\n\nSolution:\nWe built a custom ordering platform with integrated payments, real-time dashboard analytics, and an intuitive customer checkout experience.",
    client: "Gastronomy Group",
    duration: "3 Months",
    services: ["E-commerce", "Web Applications", "Booking Systems"],
    features: ["Next.js", "Node.js", "PostgreSQL", "Cloud Hosting"],
    results: [
      "Designed to improve ordering speed and reduce manual operations.",
      "Built with a highly scalable database schema prepared for multi-terminal sync.",
      "Optimized for core web vitals and instantaneous page loads."
    ],
    dashboardStats: [
      { label: "Load Time", value: "Sub-1s", change: "Edge deployed" },
      { label: "Payments", value: "Secure", change: "Stripe integrated" },
      { label: "Architecture", value: "Scalable", change: "Tested infrastructure" }
    ],
    image: "/projects/restaurant-platform.jpg"
  },
  {
    id: "healthcare-management-system",
    title: "Healthcare Management System",
    category: "Software Engineering",
    description: "Secure patient care portal, real-time scheduler, and encrypted health records system.",
    longDescription: "Challenge:\nClinic networks struggle to manage schedules, track doctor availabilities, and keep patient records secure and accessible.\n\nSolution:\nWe designed an appointment booking engine, patient portal, and secure databases engineered with encryption-at-rest to protect private records.",
    client: "Aegis Healthcare Network",
    duration: "5 Months",
    services: ["Custom Software", "SaaS Platforms", "APIs"],
    features: ["React.js", "Node.js", "PostgreSQL", "AWS Encrypted Cloud"],
    results: [
      "Designed to encrypt medical logs and streamline booking scheduling.",
      "Configured with role-based access control and secure audit trails.",
      "Created a unified dashboard showing real-time doctor availability calendars."
    ],
    dashboardStats: [
      { label: "Data Security", value: "Encrypted", change: "At-rest & In-transit" },
      { label: "Scheduling", value: "Streamlined", change: "Conflict-free calendars" },
      { label: "Database", value: "Robust", change: "PostgreSQL backed" }
    ],
    image: "/projects/healthcare-system.jpg"
  },
  {
    id: "ai-business-assistant",
    title: "AI Business Assistant",
    category: "Artificial Intelligence",
    description: "Cognitive workflow pipeline handling automatic document parsing and email classification.",
    longDescription: "Challenge:\nBusinesses waste hundreds of hours manually parsing invoices, reading documents, and classifying customer emails.\n\nSolution:\nWe deployed intelligent workflow pipelines that parse structured/unstructured files and route them automatically using customized large language models.",
    client: "Logix Enterprise Solutions",
    duration: "4 Months",
    services: ["AI Chatbots", "AI Automation", "AI Integration"],
    features: ["Python", "FastAPI", "OpenAI API", "Docker Containerization"],
    results: [
      "Created to automate document routing and eliminate repetitive indexing.",
      "Integrated with customized logical classification models to prevent routing errors.",
      "Designed with a simple admin interface for human-in-the-loop validation."
    ],
    dashboardStats: [
      { label: "Workflows", value: "Automated", change: "Zero manual intervention" },
      { label: "AI Engine", value: "Tuned", change: "Custom prompts" },
      { label: "Integration", value: "APIs", change: "Fits legacy structures" }
    ],
    image: "/projects/ai-assistant.jpg"
  }
];
