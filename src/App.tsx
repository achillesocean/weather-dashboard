import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";

function App() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 30 }),
  });

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0, 100)}
      </Card>
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
}

export default App;
