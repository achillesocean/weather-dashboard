import { weatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_API_KEY_2;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`,
  );
  const data = await res.json();
  return weatherSchema.parse(data);
}
