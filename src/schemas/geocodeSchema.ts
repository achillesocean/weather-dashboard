import { z } from "zod";

const AddressSchema = z.object({
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string(),
  country_code: z.string(),
});

const CitySchema = z.object({
  place_id: z.number(),
  osm_type: z.string(),
  osm_id: z.coerce.string(),

  lat: z.coerce.number(), // note: string, not number
  lon: z.coerce.number(), // note: string, not number

  display_name: z.string(),
  type: z.string(),
  importance: z.number(),

  address: AddressSchema,
});

export const CityResponseSchema = z.array(CitySchema);
