import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function HourlySkeleton({}: Props) {
  return (
    <Card
      title="Hourly Forecast (Today)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {Array.from({ length: 24 }).map((_, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-2 items-center p-2 2xl:justify-between"
          >
            <Skeleton className="w-15 h-6 2xl:scale-110" />
            <Skeleton className="size-8 rounded-full 2xl:size-10" />
            <Skeleton className="w-8 h-6 2xl:scale-110" />
          </div>
        );
      })}
    </Card>
  );
}
