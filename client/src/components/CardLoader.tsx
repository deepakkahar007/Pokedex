import { Skeleton } from "./ui/skeleton";

const CardLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Skeleton className="h-3 w-3/4 rounded-2xl" />
      <Skeleton className="h-28 w-3/4 rounded-2xl" />
      <Skeleton className="h-8 w-full rounded-2xl" />
      <Skeleton className="h-1 w-3/4 rounded-2xl" />
    </div>
  );
};

export default CardLoader;
