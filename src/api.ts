import { AirPollutionSchema } from "./schemas/apiPollutionSchema";
import { ForecastResponseSchema } from "./schemas/forecastSchema";
import { CityResponseSchema } from "./schemas/geocodeSchema";
import { WeatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_API_KEY_2;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`,
  );
  const data = await res.json();
  return WeatherSchema.parse(data);
}

export async function getForecast({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7&aqi=no&alerts=no`,
  );
  const data = await res.json();
  return ForecastResponseSchema.parse(data);
}

const GEO_API_KEY = import.meta.env.VITE_API_KEY_GEOCODE;

export async function getGeocode(location: string) {
  const res = await fetch(
    `https://geocode.maps.co/search?city=${location}&api_key=${GEO_API_KEY}`,
  );
  console.log("fetched geocode for location: ", location);
  const data = await res.json();
  const result = CityResponseSchema.safeParse(data);
  if (!result.success) {
    console.error("Zod Validation Failed for Geocode:", result.error.format());
    throw new Error("Invalid Geocode Data");
  }

  return result.data;
}

export async function getAirPollution({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=yes`,
  );
  const data = await res.json();
  return AirPollutionSchema.parse(data);
}
