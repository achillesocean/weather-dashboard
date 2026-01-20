import { z } from "zod";

/* ---------- shared ---------- */

const ConditionSchema = z.object({
  text: z.string(),
  icon: z.string(),
  code: z.number(),
});

/* ---------- location ---------- */

const LocationSchema = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
  tz_id: z.string(),
  localtime_epoch: z.number(),
  localtime: z.string(),
});

/* ---------- current ---------- */

const CurrentSchema = z.object({
  last_updated_epoch: z.number(),
  last_updated: z.string(),
  temp_c: z.number(),
  temp_f: z.number(),
  is_day: z.number(),
  condition: ConditionSchema,

  wind_mph: z.number(),
  wind_kph: z.number(),
  wind_degree: z.number(),
  wind_dir: z.string(),

  pressure_mb: z.number(),
  pressure_in: z.number(),
  precip_mm: z.number(),
  precip_in: z.number(),

  humidity: z.number(),
  cloud: z.number(),

  feelslike_c: z.number(),
  feelslike_f: z.number(),

  windchill_c: z.number(),
  windchill_f: z.number(),

  heatindex_c: z.number(),
  heatindex_f: z.number(),

  dewpoint_c: z.number(),
  dewpoint_f: z.number(),

  vis_km: z.number(),
  vis_miles: z.number(),

  uv: z.number(),

  gust_mph: z.number(),
  gust_kph: z.number(),

  short_rad: z.number(),
  diff_rad: z.number(),
  dni: z.number(),
  gti: z.number(),
});

/* ---------- forecast.hour ---------- */

const ForecastHourSchema = z.object({
  time_epoch: z.number(),
  time: z.string(),

  temp_c: z.number(),
  temp_f: z.number(),
  is_day: z.number(),

  condition: ConditionSchema,

  wind_mph: z.number(),
  wind_kph: z.number(),
  wind_degree: z.number(),
  wind_dir: z.string(),

  pressure_mb: z.number(),
  pressure_in: z.number(),

  precip_mm: z.number(),
  precip_in: z.number(),
  snow_cm: z.number(),

  humidity: z.number(),
  cloud: z.number(),

  feelslike_c: z.number(),
  feelslike_f: z.number(),

  windchill_c: z.number(),
  windchill_f: z.number(),

  heatindex_c: z.number(),
  heatindex_f: z.number(),

  dewpoint_c: z.number(),
  dewpoint_f: z.number(),

  will_it_rain: z.number(),
  chance_of_rain: z.number(),

  will_it_snow: z.number(),
  chance_of_snow: z.number(),

  vis_km: z.number(),
  vis_miles: z.number(),

  gust_mph: z.number(),
  gust_kph: z.number(),

  uv: z.number(),

  short_rad: z.number(),
  diff_rad: z.number(),
  dni: z.number(),
  gti: z.number(),
});

/* ---------- forecast.day ---------- */

const ForecastDaySchema = z.object({
  maxtemp_c: z.number(),
  maxtemp_f: z.number(),
  mintemp_c: z.number(),
  mintemp_f: z.number(),

  avgtemp_c: z.number(),
  avgtemp_f: z.number(),

  maxwind_mph: z.number(),
  maxwind_kph: z.number(),

  totalprecip_mm: z.number(),
  totalprecip_in: z.number(),
  totalsnow_cm: z.number(),

  avgvis_km: z.number(),
  avgvis_miles: z.number(),

  avghumidity: z.number(),

  daily_will_it_rain: z.number(),
  daily_chance_of_rain: z.number(),

  daily_will_it_snow: z.number(),
  daily_chance_of_snow: z.number(),

  condition: ConditionSchema,

  uv: z.number(),
});

/* ---------- forecast.astro ---------- */

const AstroSchema = z.object({
  sunrise: z.string(),
  sunset: z.string(),
  moonrise: z.string(),
  moonset: z.string(),
  moon_phase: z.string(),
  moon_illumination: z.number(),
  is_moon_up: z.number(),
  is_sun_up: z.number(),
});

/* ---------- forecast.forecastday ---------- */

const ForecastDayEntrySchema = z.object({
  date: z.string(),
  date_epoch: z.number(),
  day: ForecastDaySchema,
  astro: AstroSchema,
  hour: z.array(ForecastHourSchema),
});

/* ---------- forecast ---------- */

const ForecastSchema = z.object({
  forecastday: z.array(ForecastDayEntrySchema),
});

/* ---------- root ---------- */

export const ForecastResponseSchema = z.object({
  location: LocationSchema,
  current: CurrentSchema,
  forecast: ForecastSchema,
});

/* ---------- inferred TypeScript type ---------- */

export type WeatherResponse = z.infer<typeof ForecastResponseSchema>;
