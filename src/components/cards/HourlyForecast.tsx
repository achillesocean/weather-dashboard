import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../../api";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function HourlyForecast({ coords }: Props) {
  const { data } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => getForecast({ lat: coords.lat, lon: coords.lon }),
  });
  return (
    <Card
      title="Hourly Forecast (Today)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data?.forecast.forecastday[0].hour.map((hour) => {
        return (
          <div className="flex flex-col gap-2 items-center p-2">
            <p className="whitespace-nowrap">
              {new Date(hour.time_epoch * 1000).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <WeatherIcon src={hour.condition.icon} />
            <p>{Math.round(hour.temp_c)}</p>
          </div>
        );
      })}
    </Card>
  );
}
