import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-secondary animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

function SkeletonPage() {
  return (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[80px] rounded-xl" />
        <div className="space-y-2 py-4">
            <Skeleton className="h-6 w-50" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
        </div>
        <div className="space-y-2 pb-4">
            <Skeleton className="h-6 w-50" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-6 w-50" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
        </div>
    </div>
  )
}

export { Skeleton, SkeletonPage }
