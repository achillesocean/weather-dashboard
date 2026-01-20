import { ForecastResponseSchema } from "./schemas/forecastSchema";
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
