import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
}

export default App;
