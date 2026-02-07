import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function CurrentWeather({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords.lat, coords.lon],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Current Weather"
      className="md:pb-11"
      childrenClassName="flex flex-col gap-6 items-center"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-6xl font-semibold text-center">
          {Math.round(data.current.temp_c)}
        </h2>
        <WeatherIcon src={data.current.condition.icon} className="size-14" />
        <h3 className="capitalize text-xl">{data.current.condition.text}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-center">Local Time:</p>
        <h3 className="text-4xl font-semibold">
          {new Date(data.location.localtime_epoch * 1000).toLocaleTimeString(
            undefined,
            {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
              timeZone: data.location.tz_id,
            },
          )}
        </h3>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels Like</p>
          <p>{Math.round(data.current.feelslike_c)}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind</p>
          <p>{data.current.wind_kph} kph</p>
        </div>
      </div>
    </Card>
  );
}
