import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Map />
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
      <AdditionalInfo />
    </div>
  );
}

export default App;
