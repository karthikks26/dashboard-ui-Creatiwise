import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableSkeleton() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">
              <Skeleton className="h-4 w-4" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-32" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-32" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-16" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-24" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-16" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-16" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-8 rounded-full" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t px-4 py-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="hidden w-64 border-r md:block">
      <div className="flex h-14 items-center border-b px-4">
        <div className="h-6 w-16">
          <div className="h-6 w-16 animate-pulse rounded-md bg-muted"></div>
        </div>
      </div>
      <div className="p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="mb-2 h-8 animate-pulse rounded-md bg-muted"
          ></div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen w-full">
      <SidebarSkeleton />
      <div className="flex flex-1 flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <div className="h-6 w-32 animate-pulse rounded-md bg-muted"></div>
        </div>
        <div className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 h-8 w-32 animate-pulse rounded-md bg-muted"></div>
            <div className="mb-6 flex flex-wrap gap-2">
              <div className="h-10 w-32 animate-pulse rounded-md bg-muted"></div>
              <div className="h-10 w-32 animate-pulse rounded-md bg-muted"></div>
              <div className="h-10 w-32 animate-pulse rounded-md bg-muted"></div>
              <div className="h-10 w-32 animate-pulse rounded-md bg-muted"></div>
            </div>
            <TableSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
