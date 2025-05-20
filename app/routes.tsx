"use client";

import { createContext, useContext } from "react";

// Define route types
export type Route = {
  path: string;
  name: string;
};

// Create routes
export const routes: Route[] = [
  { path: "/", name: "Dashboard" },
  { path: "/articles", name: "Articles" },
  { path: "/articles/generated", name: "Generated Articles" },
  { path: "/articles/published", name: "Published Articles" },
  { path: "/articles/scheduled", name: "Scheduled Articles" },
  { path: "/articles/archived", name: "Archived Articles" },
  { path: "/auto-blog", name: "Auto Blog" },
  { path: "/internal-links", name: "Internal Links" },
  { path: "/backlinks", name: "Free Backlinks" },
  { path: "/integrations", name: "Integrations" },
  { path: "/subscription", name: "Subscription" },
  { path: "/affiliate", name: "Affiliate Program" },
  { path: "/help", name: "Help Center" },
  { path: "/updates", name: "Updates" },
  { path: "/chat", name: "Live Chat Support" },
  { path: "/profile", name: "Profile" },
];

// Create a context for the current route
const RouteContext = createContext<string>("/");

export const RouteProvider = RouteContext.Provider;
export const useRoute = () => useContext(RouteContext);
