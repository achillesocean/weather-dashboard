import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Wind from "/src/assets/wind.svg?react";
import Uv from "/src/assets/uv.svg?react";
import Cloud from "/src/assets/cloud.svg?react";
import Precipitation from "/src/assets/precipitation.svg?react";
import type { Coords } from "../../types";
type Props = {
  coords: Coords;
};

export default function AdditionalInfo({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords.lat, coords.lon],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {rows.map(({ label, value, Icon }) => (
        <div key={label} className="flex justify-between">
          <div className="flex gap-4">
            <span className="text-gray-500">{label}</span>
            <Icon className="size-8 invert" />
          </div>
          <span>{data.current[value]}</span>
        </div>
      ))}
    </Card>
  );
}

const rows = [
  { label: "Cloudiness (%)", value: "cloud", Icon: Cloud },
  { label: "Wind Direction", value: "wind_dir", Icon: Wind },
  { label: "UV Index", value: "uv", Icon: Uv },
  { label: "Precipitation (mm)", value: "precip_mm", Icon: Precipitation },
] as const;
