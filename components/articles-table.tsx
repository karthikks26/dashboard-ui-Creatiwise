"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useArticleContext } from "@/context/article-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArticlesTable() {
  const {
    articles,
    selectedArticles,
    toggleSelectAll,
    toggleSelectArticle,
    searchQuery,
    sortColumn,
    sortDirection,
    setSortColumn,
    setSortDirection,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
  } = useArticleContext();

  // Filter articles based on search query
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortColumn === "title") {
      return sortDirection === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortColumn === "keyword") {
      return sortDirection === "asc"
        ? a.keyword.localeCompare(b.keyword)
        : b.keyword.localeCompare(a.keyword);
    } else if (sortColumn === "words") {
      return sortDirection === "asc" ? a.words - b.words : b.words - a.words;
    } else if (sortColumn === "createdOn") {
      // Simple string comparison for demo purposes
      return sortDirection === "asc"
        ? a.createdOn.localeCompare(b.createdOn)
        : b.createdOn.localeCompare(a.createdOn);
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = sortedArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return (
        <div className="ml-1 flex flex-col">
          <ChevronUp className="h-3 w-3 text-muted-foreground" />
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>
      );
    }

    return sortDirection === "asc" ? (
      <ChevronUp className="ml-1 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-1 h-4 w-4" />
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">
              <Checkbox
                checked={
                  selectedArticles.length === filteredArticles.length &&
                  filteredArticles.length > 0
                }
                onCheckedChange={toggleSelectAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>
              <button
                className="flex items-center font-medium"
                onClick={() => handleSort("title")}
              >
                Article Title
                {getSortIcon("title")}
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center font-medium"
                onClick={() => handleSort("keyword")}
              >
                Keyword [Traffic]
                {getSortIcon("keyword")}
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center font-medium"
                onClick={() => handleSort("words")}
              >
                Words
                {getSortIcon("words")}
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center font-medium"
                onClick={() => handleSort("createdOn")}
              >
                Created On
                {getSortIcon("createdOn")}
              </button>
            </TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Publish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedArticles.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No articles found.
              </TableCell>
            </TableRow>
          ) : (
            paginatedArticles.map((article) => (
              <TableRow key={article.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedArticles.includes(article.id)}
                    onCheckedChange={() => toggleSelectArticle(article.id)}
                    aria-label={`Select ${article.title}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>
                  {article.keyword} {article.traffic}
                </TableCell>
                <TableCell>{article.words}</TableCell>
                <TableCell>{article.createdOn}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 rounded-full border border-blue-500 bg-white">
                      <AvatarFallback className="text-blue-500">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Publish Now</DropdownMenuItem>
                        <DropdownMenuItem>Schedule</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="flex flex-col items-center justify-between gap-4 border-t px-4 py-2 sm:flex-row">
        <div className="flex items-center text-sm text-muted-foreground">
          <span>Total {filteredArticles.length} Article Titles | Show</span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => setItemsPerPage(Number.parseInt(value))}
          >
            <SelectTrigger className="mx-2 h-8 w-16">
              <SelectValue placeholder={itemsPerPage.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span>entries per page</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="mx-2">
            {currentPage} / {Math.max(1, totalPages)}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
