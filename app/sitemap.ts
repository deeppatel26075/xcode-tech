import { MetadataRoute } from "next";
import { blogs } from "../content/blogs";
import { projects } from "../content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xcodetech.in";

  // Core Pages
  const routes = ["", "/services", "/solutions", "/work", "/technology", "/insights", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic Case Studies
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/case-studies/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic Blogs
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/insights/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
