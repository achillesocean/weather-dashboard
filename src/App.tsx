import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 30 }),
  });

  // console.log(JSON.stringify(data));
  return JSON.stringify(data);
}

export default App;
