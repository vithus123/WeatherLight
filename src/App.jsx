import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import Forecast from "./components/Forecast";
import Inputs from "./components/inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/WeatherService";


const App = () => {

const [query, setQuery]= useState({q: "colombo"});
const [units,setUnits]= useState('metric');
const [weather, setWeather]=useState(null);


  const getWeather =async () =>{
    await getFormattedWeatherData({...query, units})
    .then((data) => {
      setWeather(data);
    });
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  },[query, units] );
  getWeather();

  const formatBackground =()=>{
    if(!weather) return 'from-cyan-600 to-blue-700';
    const threshold= units === 'metric'? 20:60
    if(weather.temp <=threshold) return 'from-cyan-600 to-blue-700';
    return "from-yellow-600 to-orange-700";
  }


  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br
    shadow-xl shadow-gray-400 ${formatBackground()}`}>
    < TopButtons setQuery={setQuery} />
    <Inputs setQuery={setQuery} setUnits={setUnits} />

    {weather && (
    <>
    <TimeAndLocation weather={weather}/>
    <TempAndDetails weather={weather}/>
    <Forecast title="3 hour step forward" data={weather.hourly}/>
    <Forecast title="daily forecast" data={weather.daily}/>
      </>
    )}
</div>
  );
};

export default App;