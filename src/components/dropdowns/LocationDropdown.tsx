import type { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select
      value={location}
      onValueChange={(value) => {
        setLocation(value);
        console.log("New location selected: ", value);
      }}
    >
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {/* If the user clicked the map, we add a temporary "Custom" item 
            so the Select component stays 'controlled' and shows the correct state */}
        {location === "Custom Map Point" && (
          <SelectItem value="Custom Map Point">📍 Map Location</SelectItem>
        )}
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const locations = [
  "Bangkok",
  "Tokyo",
  "New York",
  "London",
  "Paris",
  "Berlin",
  "Sydney",
];
