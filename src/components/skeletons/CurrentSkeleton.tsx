import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function CurrentSkeleton({}: Props) {
  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col gap-6 items-center 2xl:justify-between"
    >
      <div className="flex flex-col gap-2 items-center">
        <Skeleton className="h-24 w-24 rounded-full" />
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-6 w-32 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-center">Local Time:</p>
        <Skeleton className="h-6 w-32 rounded-md" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels Like</p>
          <Skeleton className="h-6 w-32 rounded-md" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <Skeleton className="h-6 w-32 rounded-md" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind</p>
          <Skeleton className="h-6 w-32 rounded-md" />
        </div>
      </div>
    </Card>
  );
}
