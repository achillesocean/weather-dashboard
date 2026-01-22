import type { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

type Props = {
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
};

export default function MapTypeDropdown({ mapType, setMapType }: Props) {
  return (
    <Select
      value={mapType}
      onValueChange={(value) => {
        setMapType(value);
        console.log("New map type selected: ", value);
      }}
    >
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Map Type" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {types.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const types = [
  "precipitationIntensity",
  "temperature",
  "windSpeed",
  "humidity",
  "dewPoint",
  "visibility",
  "cloudCover",
  "cloudBase",
  "cloudCeiling",
  "windDirection",
];
