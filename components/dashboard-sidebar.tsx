"use client";

import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Rss,
  Link,
  Link2,
  Layers,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  MessageSquare,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "@/lib/router";

export function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <h1 className="text-xl font-bold">abun</h1>
          <div className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 text-xs"
              onClick={() => setWorkspaceOpen(!workspaceOpen)}
            >
              <Avatar className="h-5 w-5">
                <AvatarImage
                  src="/placeholder.svg?height=20&width=20"
                  alt="Amazon"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              amazon.com
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <FileText className="h-4 w-4" />
                  <span>Articles</span>
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/create")}
                      onClick={() => navigateTo("/articles/create")}
                    >
                      Create Article
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/generated")}
                      onClick={() => navigateTo("/articles/generated")}
                    >
                      Generated Articles
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/keyword-projects")}
                      onClick={() => navigateTo("/articles/keyword-projects")}
                    >
                      Keyword Projects
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/ai-keyword")}
                      onClick={() => navigateTo("/articles/ai-keyword")}
                    >
                      AI Keyword to Article
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/steal-competitor")}
                      onClick={() => navigateTo("/articles/steal-competitor")}
                    >
                      Steal Competitor Keyword
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/import-gsc")}
                      onClick={() => navigateTo("/articles/import-gsc")}
                    >
                      Import Keyword from GSC
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/manual-keyword")}
                      onClick={() => navigateTo("/articles/manual-keyword")}
                    >
                      Manual Keyword to Article
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/bulk-keyword")}
                      onClick={() => navigateTo("/articles/bulk-keyword")}
                    >
                      Bulk Keyword to Article
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/longtail-keyword")}
                      onClick={() => navigateTo("/articles/longtail-keyword")}
                    >
                      Longtail Keyword to Article
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={isActive("/articles/settings")}
                      onClick={() => navigateTo("/articles/settings")}
                    >
                      Article Settings
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/auto-blog")}
              onClick={() => navigateTo("/auto-blog")}
            >
              <Rss className="h-4 w-4" />
              <span>Auto Blog</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/internal-links")}
              onClick={() => navigateTo("/internal-links")}
            >
              <Link className="h-4 w-4" />
              <span>Internal Links</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/free-backlinks")}
              onClick={() => navigateTo("/free-backlinks")}
            >
              <Link2 className="h-4 w-4" />
              <span>Free Backlinks</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/integrations")}
              onClick={() => navigateTo("/integrations")}
            >
              <Layers className="h-4 w-4" />
              <span>Integrations</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/subscription")}
              onClick={() => navigateTo("/subscription")}
            >
              <CreditCard className="h-4 w-4" />
              <span>Subscription</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/affiliate-program")}
              onClick={() => navigateTo("/affiliate-program")}
            >
              <Users className="h-4 w-4" />
              <span>Affiliate Program</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/help-center")}
              onClick={() => navigateTo("/help-center")}
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help Center</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/updates")}
              onClick={() => navigateTo("/updates")}
            >
              <Bell className="h-4 w-4" />
              <span>Updates</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/live-chat")}
              onClick={() => navigateTo("/live-chat")}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Live Chat Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={isActive("/profile")}
              onClick={() => navigateTo("/profile")}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
