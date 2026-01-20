import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../../api";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => getForecast({ lat: 10, lon: 30 }),
  });
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.forecast.forecastday.map((daily) => (
        <div key={daily.date} className="flex justify-between">
          {/* <p>{daily.date}</p> */}
          <p className="w-9">
            {new Date(daily.date_epoch * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <WeatherIcon src={daily.day.condition.icon} />
          <p>{Math.round(daily.day.avgtemp_c)}</p>
          <p className="text-gray-500/75">{Math.round(daily.day.mintemp_c)}</p>
          <p className="text-gray-500/75">{Math.round(daily.day.maxtemp_c)}</p>
        </div>
      ))}
    </Card>
  );
}
