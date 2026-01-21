import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./api";

function App() {
  const [coordinates, setCoords] = useState<Coords>({ lat: 9, lon: 38.75 });
  const [location, setLocation] = useState("Tokyo");

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation("Location");
  };

  const coords =
    location === "Location"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 9, lon: geocodeData?.[0].lon ?? 38.75 };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-white text-6xl">Coords ready</div>
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <DailyForecast coords={coords} />
      <HourlyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
