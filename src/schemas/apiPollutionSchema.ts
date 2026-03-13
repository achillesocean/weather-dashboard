import { z } from "zod";

export const AirPollutionSchema = z.object({
  location: z.object({
    name: z.string(),
    region: z.string(),
    country: z.string(),
    lat: z.number(),
    lon: z.number(),
    tz_id: z.string(),
    localtime_epoch: z.number(),
    localtime: z.string(),
  }),

  current: z.object({
    last_updated_epoch: z.number(),
    last_updated: z.string(),

    temp_c: z.number(),
    temp_f: z.number(),
    is_day: z.number(),

    condition: z.object({
      text: z.string(),
      icon: z.string(),
      code: z.number(),
    }),

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

    air_quality: z.object({
      co: z.number(),
      no2: z.number(),
      o3: z.number(),
      so2: z.number(),
      pm2_5: z.number(),
      pm10: z.number(),
      // "us-epa-index": z.number(),
      "gb-defra-index": z.number(),
    }),

    short_rad: z.optional(z.number()),
    diff_rad: z.optional(z.number()),
    dni: z.optional(z.number()),
    gti: z.optional(z.number()),
  }),
});
