export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  author: { name: string; role: string; avatar: string };
}

export const blogs: BlogPost[] = [
  {
    slug: "engineering-scalable-saas-products",
    title: "Engineering scalable SaaS products: From idea to architecture",
    category: "Software Engineering",
    date: "June 14, 2026",
    readTime: "6 min read",
    summary: "A deep dive into planning and structuring SaaS systems, from database schema selection to multitenant scaling layers.",
    author: {
      name: "Deep Patel",
      role: "Founder & Technology Lead",
      avatar: "/founder-portrait.png"
    },
    content: `
      <h2>Foundations of SaaS Scaling</h2>
      <p>Building a Software as a Service (SaaS) application requires architectural foresight. The decisions made during the initial scoping phases directly determine the system's cost-to-serve, performance latency, and future update flexibility.</p>
      
      <h2>Multitenancy Architecture Models</h2>
      <p>One of the first technical decisions is choosing the multitenancy schema: database-per-tenant, schema-per-tenant, or shared database with tenant partitioning. For early-stage and growth startups, a shared database model utilizing strong Row-Level Security (RLS) policies in PostgreSQL offers the optimal balance between operational cost and data isolation boundary security.</p>
      
      <blockquote>
        "Scalability is not about handling a million users today; it is about establishing database patterns that do not degrade as users grow."
      </blockquote>
 
      <h2>Edge Rendering and Latency Management</h2>
      <p>Modern global users expect sub-second page loads. By leveraging edge-rendered frameworks (like Next.js Server Components deployed to edge networks), you can cache initial static shells while dynamically resolving tenant-specific details near the user's geographic location, slashing Time to First Byte (TTFB).</p>
    `
  },
  {
    slug: "ai-automation-business-workflows",
    title: "How AI automation can transform business workflows",
    category: "Intelligent Systems",
    date: "June 8, 2026",
    readTime: "5 min read",
    summary: "Moving beyond simple scripts to cognitive document parsers and validation loops that eliminate administrative drag.",
    author: {
      name: "Deep Patel",
      role: "Founder & Technology Lead",
      avatar: "/founder-portrait.png"
    },
    content: `
      <h2>Beyond Standard Automation</h2>
      <p>RPA scripts frequently fail when visual layouts shift. Modern workflow optimization leverages cognitive AI models that read screens and unstructured files semantically. Instead of scraping absolute HTML paths, our systems extract meaningful values (like Invoice totals or Tax IDs) based on context.</p>
      
      <h2>Designing Human-in-the-Loop Safeguards</h2>
      <p>For high-value business tasks, running AI systems fully autonomously introduces risks. We engineer intermediate validation screens where AI models attach confidence indicators to extracted data. Human triagers are only called to verify details when the confidence rating falls below 95%.</p>
      
      <h2>Connected Operations</h2>
      <p>AI should not operate in isolation. The parsed results must feed directly into legacy ERP databases, accounting books, or CRM portals through robust API queues (using technologies like FastAPI and Docker container runners).</p>
    `
  },
  {
    slug: "custom-software-beyond-spreadsheets",
    title: "Why businesses need custom software beyond spreadsheets",
    category: "Business Transformation",
    date: "May 28, 2026",
    readTime: "4 min read",
    summary: "Why relying on complex spreadsheets introduces operational risk and when to transition to custom database tools.",
    author: {
      name: "Deep Patel",
      role: "Founder & Technology Lead",
      avatar: "/founder-portrait.png"
    },
    content: `
      <h2>The Limits of Spreadsheets</h2>
      <p>Spreadsheets are the ultimate prototyping tool, but they lack transactional safety, granular user permissions, audit trails, and concurrency. When multiple team members overwrite rows simultaneously, data corruption occurs, leading to silent calculation errors that harm actual profits.</p>
      
      <h2>Transitioning to Custom Database Platforms</h2>
      <p>A custom web application built with a Relational Database (SQL) enforces data integrity, tracks change logs, and allows different roles to access only the views they need. This transitions team productivity from error-prone data entries to unified, secure operational workflows.</p>
    `
  },
  {
    slug: "building-secure-applications",
    title: "Building secure applications from day one",
    category: "Cloud & Security",
    date: "May 12, 2026",
    readTime: "5 min read",
    summary: "Integrating encryption, role-based access control, and proactive audit logging directly into early-stage dev cycles.",
    author: {
      name: "Deep Patel",
      role: "Founder & Technology Lead",
      avatar: "/founder-portrait.png"
    },
    content: `
      <h2>Security as a Foundation, Not a Checklist</h2>
      <p>Cybersecurity is often treated as an audit checklist to be completed right before release. This approach leaves deep architectural flaws in IAM logic, SQL injection avenues, and key handling. A mature system integrates security safeguards directly into early sprint cycles.</p>
      
      <h2>Implementing Granular IAM Policies</h2>
      <p>Role-Based Access Control (RBAC) should be defined before creating data schemas. We verify that frontend visual blocks and backend API routes independently authenticate user credentials, blocking malicious path manipulation at the server boundary.</p>
    `
  }
];
