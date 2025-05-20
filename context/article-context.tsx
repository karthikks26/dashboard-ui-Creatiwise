"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Define article type
export interface Article {
  id: number;
  title: string;
  keyword: string;
  traffic: string;
  words: number;
  createdOn: string;
}

// Define context type
interface ArticleContextType {
  articles: Article[];
  selectedArticles: number[];
  toggleSelectAll: () => void;
  toggleSelectArticle: (id: number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoading: boolean;
  sortColumn: string;
  sortDirection: "asc" | "desc";
  setSortColumn: (column: string) => void;
  setSortDirection: (direction: "asc" | "desc") => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
}

// Create context
const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

// Sample data for different tabs
const generatedArticles: Article[] = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: "[2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: "[2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: "[2240000]",
    words: 2676,
    createdOn: "a day ago",
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services [2024]",
    keyword: "virtual executive assistant",
    traffic: "[2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: "[390]",
    words: 1793,
    createdOn: "---",
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: "[3600]",
    words: 2647,
    createdOn: "---",
  },
  {
    id: 7,
    title:
      "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks",
    traffic: "[8100]",
    words: 2261,
    createdOn: "---",
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: "[880]",
    words: 1543,
    createdOn: "---",
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: "[390]",
    words: 1974,
    createdOn: "---",
  },
];

const publishedArticles: Article[] = [
  {
    id: 10,
    title: "10 Best SEO Practices for E-commerce Websites",
    keyword: "ecommerce seo",
    traffic: "[12000]",
    words: 3250,
    createdOn: "2 days ago",
  },
  {
    id: 11,
    title: "How to Optimize Your Website for Voice Search",
    keyword: "voice search optimization",
    traffic: "[5400]",
    words: 2890,
    createdOn: "3 days ago",
  },
  {
    id: 12,
    title: "The Ultimate Guide to Content Marketing in 2024",
    keyword: "content marketing guide",
    traffic: "[9800]",
    words: 4120,
    createdOn: "5 days ago",
  },
];

const scheduledArticles: Article[] = [
  {
    id: 13,
    title: "5 Ways to Improve Your Website's Core Web Vitals",
    keyword: "core web vitals",
    traffic: "[4300]",
    words: 2750,
    createdOn: "1 day ago",
  },
  {
    id: 14,
    title: "How to Create a Successful Social Media Strategy",
    keyword: "social media strategy",
    traffic: "[7600]",
    words: 3180,
    createdOn: "2 days ago",
  },
];

const archivedArticles: Article[] = [
  {
    id: 15,
    title: "Outdated SEO Techniques You Should Avoid in 2024",
    keyword: "outdated seo techniques",
    traffic: "[3200]",
    words: 2450,
    createdOn: "2 months ago",
  },
  {
    id: 16,
    title: "The History of Search Engine Optimization",
    keyword: "seo history",
    traffic: "[1800]",
    words: 3650,
    createdOn: "3 months ago",
  },
  {
    id: 17,
    title: "How Google's Algorithm Has Changed Over Time",
    keyword: "google algorithm history",
    traffic: "[4100]",
    words: 4250,
    createdOn: "4 months ago",
  },
];

// Create provider
export function ArticleProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>(generatedArticles);
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("generated");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sortColumn, setSortColumn] = useState("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Update articles when tab changes
  useEffect(() => {
    setIsLoading(true);
    setSelectedArticles([]);
    setCurrentPage(1);

    // Simulate API call
    setTimeout(() => {
      switch (activeTab) {
        case "generated":
          setArticles(generatedArticles);
          break;
        case "published":
          setArticles(publishedArticles);
          break;
        case "scheduled":
          setArticles(scheduledArticles);
          break;
        case "archived":
          setArticles(archivedArticles);
          break;
        default:
          setArticles(generatedArticles);
      }
      setIsLoading(false);
    }, 800);
  }, [activeTab]);

  // Reset page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const toggleSelectAll = () => {
    if (selectedArticles.length === articles.length) {
      setSelectedArticles([]);
    } else {
      setSelectedArticles(articles.map((article) => article.id));
    }
  };

  const toggleSelectArticle = (id: number) => {
    if (selectedArticles.includes(id)) {
      setSelectedArticles(
        selectedArticles.filter((articleId) => articleId !== id)
      );
    } else {
      setSelectedArticles([...selectedArticles, id]);
    }
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        selectedArticles,
        toggleSelectAll,
        toggleSelectArticle,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        isLoading,
        sortColumn,
        sortDirection,
        setSortColumn,
        setSortDirection,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

// Create hook for using the context
export function useArticleContext() {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticleContext must be used within an ArticleProvider");
  }
  return context;
}
