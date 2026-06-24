export interface ServiceProcessStep {
  title: string;
  desc: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  iconName: "Laptop" | "Layout" | "Smartphone" | "Cpu" | "Cloud" | "Palette" | "Shield";
  items: string[];
  color: string; // Tailwind color wrapper class
  process: ServiceProcessStep[];
  metrics: ServiceMetric[];
  techStack: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription: "Tailored digital products built from the ground up, optimized for reliability, scalability, and high performance.",
    extendedDescription: "We construct bespoke software solutions that streamline operations, eliminate system bottlenecks, and provide transactional reliability. Our team handles the entire lifecycle, from database design and API architecture to deploying scalable, multi-tenant SaaS platforms.",
    iconName: "Laptop",
    items: ["Custom SaaS Platforms", "Business Dashboards", "API Design & Integrations", "Internal Workflow Systems"],
    color: "text-blue-600 bg-blue-50/40 border-blue-100/50",
    process: [
      { title: "Discovery & Scope", desc: "Analyzing your requirements, mapping core operations, and planning feature milestones." },
      { title: "Architecture Design", desc: "Modeling secure database schemas, scaling paths, and entity-relationship models." },
      { title: "Development", desc: "Engineering clean, modular codebase foundations utilizing TypeScript and high-speed API layers." },
      { title: "Deployment & QA", desc: "Rigorous unit testing, performance optimization, and serverless container staging." }
    ],
    metrics: [
      { value: "2x", label: "Workflow Efficiency" },
      { value: "99.9%", label: "System Availability" },
      { value: "100%", label: "IP Ownership" }
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker", "AWS"]
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    shortDescription: "Creating fast, edge-rendered corporate web applications and commerce storefronts that capture customers and boost conversions.",
    extendedDescription: "We build blazing-fast web applications designed for rich user engagement and sub-second page loads. By leveraging edge caching, custom e-commerce APIs, and dynamic state management, we turn static web footprints into robust transaction engines.",
    iconName: "Layout",
    items: ["Corporate Web Apps", "Headless E-commerce Stores", "Integrated Booking Systems", "Custom Payment Integrations"],
    color: "text-sky-500 bg-sky-50/40 border-sky-100/50",
    process: [
      { title: "UX Journey Mapping", desc: "Designing visual layouts, responsive navigation grids, and smooth click-throughs." },
      { title: "API Orchestration", desc: "Integrating secure payment gateways, search endpoints, and client databases." },
      { title: "Tactile Engineering", desc: "Building front-ends using React and Framer Motion for premium user interactions." },
      { title: "Edge Deployment", desc: "Configuring serverless edge delivery, asset optimization, and SEO benchmarks." }
    ],
    metrics: [
      { value: "<200ms", label: "Page Load Speed" },
      { value: "45%+", label: "Conversion Lift" },
      { value: "100", label: "Lighthouse Performance" }
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Stripe API", "Vercel Edge", "GraphQL"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Engineering premium native and cross-platform mobile apps for iOS and Android, focusing on intuitive animations and offline functionality.",
    extendedDescription: "We construct beautiful, tactile mobile application ecosystems that put your business directly into your users' hands. Our mobile architectures prioritize sub-second interface responses, secure localized databases, and offline-first functionalities.",
    iconName: "Smartphone",
    items: ["iOS Native Apps", "Android Native Apps", "Cross-Platform Apps (Flutter/React)", "App Store Deployments"],
    color: "text-indigo-500 bg-indigo-50/40 border-indigo-100/50",
    process: [
      { title: "Interface Design", desc: "Structuring natural gesture layouts, swipe physics, and haptic feedback profiles." },
      { title: "State Setup", desc: "Wiring responsive local states to minimize device battery drain and load lags." },
      { title: "Offline Cache", desc: "Enabling secure device databases that sync with main servers when online." },
      { title: "Store Launch", desc: "Handling Apple App Store and Google Play reviews, metadata, and testing deployment." }
    ],
    metrics: [
      { value: "4.8★", label: "Average App Rating" },
      { value: "Offline-First", label: "Architecture Enabled" },
      { value: "1 Codebase", label: "Multi-Platform Build" }
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "SQLite", "Firebase", "Fastlane"]
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    shortDescription: "Integrating cognitive tools and automated workflows that eliminate manual processing and boost operational productivity.",
    extendedDescription: "We deploy cognitive AI agents and automated processing pipelines that read, validate, and route complex enterprise workflows. Instead of standard click-and-scrape scripts, our integrations leverage large language models to handle unstructured data safely.",
    iconName: "Cpu",
    items: ["AI Assistant Chatbots", "AI Automated Workflows", "Custom LLM Integrations", "Document Parsing Pipelines"],
    color: "text-blue-600 bg-blue-50/40 border-blue-100/50",
    process: [
      { title: "Workflow Audit", desc: "Reviewing your operational logs to find repetitive data bottlenecks." },
      { title: "Model Tuning", desc: "Configuring LLM parameters, context files, and secure vector databases." },
      { title: "Pipeline Integration", desc: "Connecting cognitive AI extractors directly into your active CRM/ERP database." },
      { title: "Audit Dashboards", desc: "Building clean moderation panels where team members review edge classification outputs." }
    ],
    metrics: [
      { value: "95%", label: "Manual Drag Reduced" },
      { value: "4s / doc", label: "Document Parse Time" },
      { value: "99.4%", label: "Extraction Accuracy" }
    ],
    techStack: ["Python", "OpenAI API", "LangChain", "Pinecone DB", "Node.js", "Docker"]
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    shortDescription: "Deploying robust, auto-scaling architectures designed to ensure 99.9% availability and optimize monthly resource costs.",
    extendedDescription: "We build self-healing, automated cloud infrastructure plans that scale seamlessly to match high traffic. Our DevOps audits target bottlenecked codebases, secure credential vaults, and implement automated continuous delivery configurations.",
    iconName: "Cloud",
    items: ["Cloud Infrastructure Design", "Automated CI/CD Pipelines", "Containerization & Docker", "Resource Cost Optimization"],
    color: "text-sky-650 bg-sky-50/40 border-sky-100/50",
    process: [
      { title: "Infrastructure Audit", desc: "Analyzing active server instances, billing leaks, and database latency gaps." },
      { title: "IaC Scripting", desc: "Writing clean container maps and VPC definitions as secure infrastructure code." },
      { title: "CI/CD Setup", desc: "Creating delivery pipelines with built-in test runners and rollback triggers." },
      { title: "Auto-Scale Tuning", desc: "Deploying load-responsive parameters and global CDN caching configurations." }
    ],
    metrics: [
      { value: "99.99%", label: "System Uptime" },
      { value: "40%+", label: "Cloud Cost Savings" },
      { value: "0s", label: "Downtime Deployments" }
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"]
  },
  {
    slug: "ui-ux-engineering",
    title: "UI/UX Engineering",
    shortDescription: "Designing high-fidelity visual interfaces and user journeys that reduce user friction and elevate digital product experience.",
    extendedDescription: "We create premium visual designs and interactive UI paradigms that capture user interest. Our process unifies brand goals with deep usability audits, delivering clean layouts that make product navigation intuitive and satisfying.",
    iconName: "Palette",
    items: ["High-Fidelity UI Design", "Interactive Prototypes", "Design System Implementation", "Usability Audits"],
    color: "text-indigo-600 bg-indigo-50/40 border-indigo-100/50",
    process: [
      { title: "Structural Wireframes", desc: "Constructing structural page wires outlining primary data sections and layouts." },
      { title: "Design System", desc: "Establishing custom color tokens, responsive fonts, and layout grid libraries." },
      { title: "Dynamic Prototype", desc: "Creating interactive user paths demonstrating animations and user motions." },
      { title: "Usability Testing", desc: "Mapping user click coordinates to resolve interface friction hot spots." }
    ],
    metrics: [
      { value: "35%", label: "User Task Speedup" },
      { value: "100%", label: "Figma to Code Accuracy" },
      { value: "AAA", label: "Accessibility Score" }
    ],
    techStack: ["Figma", "Adobe CC", "Tailwind CSS", "Framer Motion", "Storybook", "React Components"]
  },
  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    shortDescription: "Ensuring your digital assets are protected through active threat auditing, secure protocols, and vulnerability patching.",
    extendedDescription: "We harden your business systems against malicious exploits, data leakage, and system vulnerabilities. Our security plans embed real-time threat auditing, data encryption standards, and secure authorization configurations to safeguard company IP.",
    iconName: "Shield",
    items: ["Vulnerability Scanning", "Role-Based Access Control", "Data Encryption Standards", "Secure Code Audits"],
    color: "text-blue-600 bg-blue-50/40 border-blue-100/50",
    process: [
      { title: "Vulnerability Scan", desc: "Running security penetration tools on public endpoints and server clusters." },
      { title: "Access Gates", desc: "Enforcing role-based dashboards and single sign-on verification systems." },
      { title: "Encryption Mapping", desc: "Encoding data packages at rest and in transit utilizing secure SSL keys." },
      { title: "Vulnerability Patching", desc: "Upgrading insecure dependencies, firewall parameters, and trace logging." }
    ],
    metrics: [
      { value: "100%", label: "OWASP Compliance" },
      { value: "256-bit", label: "AES Encryption" },
      { value: "Real-time", label: "Threat Audit Logs" }
    ],
    techStack: ["OWASP ZAP", "Auth0 / JWT", "HTTPS / SSL", "AWS KMS", "SonarQube", "HashiCorp Vault"]
  }
];
