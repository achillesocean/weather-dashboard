import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import type { Coords } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./api";
import LocationDropdown from "./components/dropdowns/LocationDropdown";

function App() {
  // Default to Tokyo or whatever your preferred start point is
  const [coordinates, setCoords] = useState<Coords>({
    lat: 35.6895,
    lon: 139.6917,
  });
  const [location, setLocation] = useState("Tokyo");

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
    // Only fetch if it's a known city (not the manual "Map Location")
    enabled: location !== "Custom Map Point",
  });

  // Sync API data to coordinates state
  useEffect(() => {
    if (geocodeData && geocodeData.length > 0) {
      setCoords({
        lat: geocodeData[0].lat,
        lon: geocodeData[0].lon,
      });
      console.log("Geocode data updated coordinates: ", {
        lat: geocodeData[0].lat,
        lon: geocodeData[0].lon,
      });
    }
    console.log("UseEffect triggered to fetch geocode data.");
  }, [geocodeData]);

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation("Custom Map Point"); // Use a specific string for clarity
  };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown location={location} setLocation={setLocation} />
      <Map coords={coordinates} onMapClick={onMapClick} />
      <CurrentWeather coords={coordinates} />
      <DailyForecast coords={coordinates} />
      <HourlyForecast coords={coordinates} />
      <AdditionalInfo coords={coordinates} />
    </div>
  );
}

export default App;
