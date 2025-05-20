"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Define route context
interface RouterContextType {
  currentPath: string;
  push: (path: string) => void;
}

// Create context
const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Create provider
export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState("/");

  const push = (path: string) => {
    setCurrentPath(path);
    // In a real app, you would use Next.js router or React Router
    // This is just for demonstration purposes
    window.history.pushState({}, "", path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, push }}>
      {children}
    </RouterContext.Provider>
  );
}

// Create hooks
export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

export function usePathname() {
  const { currentPath } = useRouter();
  return currentPath;
}
