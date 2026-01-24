import { getAirPollution } from "@/api";
import type { Coords } from "@/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Card from "./cards/Card";

type Props = { coords: Coords };

export default function SidePanel(props: Props) {
  return (
    <div className="fixed top-0 right-0 h-screen w-80 shadow-md bg-sidebar z-1001 py-8 px-4">
      <Suspense>
        <AirPollution {...props} />
      </Suspense>
    </div>
  );
}

function AirPollution({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["airPollution", coords.lat, coords.lon],
    queryFn: () => getAirPollution({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Air Pollution Levels</h1>
      <h1 className="text-5xl font-semibold">
        {data.current.air_quality["gb-defra-index"]}
      </h1>
      <h1 className="text-2xl font-semibold">AQI</h1>
      {Object.entries(data.current.air_quality)
        .filter(([key]) => key !== "gb-defra-index")
        .map(([key, value]) => (
          <Card
            key={key}
            className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60"
          >
            <div className="flex justify-between">
              <span className="text-gray-500 text-lg font-bold capitalize">
                {key.toUpperCase()}
              </span>
              <span className="text-lg font-semibold">{value}</span>
            </div>
          </Card>
        ))}
    </div>
  );
}
