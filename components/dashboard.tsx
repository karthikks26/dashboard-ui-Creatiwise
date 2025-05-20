"use client";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardContent } from "@/components/dashboard-content";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ArticleProvider } from "@/context/article-context";
import { RouterProvider } from "@/lib/router";

export function Dashboard() {
  return (
    <ArticleProvider>
      <RouterProvider>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-background">
            <DashboardSidebar />
            <DashboardContent />
          </div>
        </SidebarProvider>
      </RouterProvider>
    </ArticleProvider>
  );
}
