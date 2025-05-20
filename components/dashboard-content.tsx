"use client";

import type React from "react";
import { ArticlesTable } from "@/components/articles-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useArticleContext } from "@/context/article-context";
import { TableSkeleton } from "@/components/loading-skeleton";

export function DashboardContent() {
  const { activeTab, setActiveTab, searchQuery, setSearchQuery, isLoading } =
    useArticleContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="flex flex-1 flex-col">
      <div className="flex items-center border-b px-4 py-2">
        <SidebarTrigger />
        <h1 className="ml-2 text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-2xl font-bold">Articles</h1>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <TabsList className="mb-2 h-auto flex-wrap sm:mb-0">
                <TabsTrigger value="generated" className="rounded-md">
                  Generated Articles
                </TabsTrigger>
                <TabsTrigger value="published" className="rounded-md">
                  Published Articles
                </TabsTrigger>
                <TabsTrigger value="scheduled" className="rounded-md">
                  Scheduled Articles
                </TabsTrigger>
                <TabsTrigger value="archived" className="rounded-md">
                  Archived Articles
                </TabsTrigger>
              </TabsList>
              <div className="w-full sm:w-auto">
                <Input
                  placeholder="Search for Title & Keywords..."
                  className="max-w-sm"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <TabsContent value="generated" className="mt-6">
              {isLoading ? <TableSkeleton /> : <ArticlesTable />}
            </TabsContent>
            <TabsContent value="published" className="mt-6">
              {isLoading ? <TableSkeleton /> : <ArticlesTable />}
            </TabsContent>
            <TabsContent value="scheduled" className="mt-6">
              {isLoading ? <TableSkeleton /> : <ArticlesTable />}
            </TabsContent>
            <TabsContent value="archived" className="mt-6">
              {isLoading ? <TableSkeleton /> : <ArticlesTable />}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
