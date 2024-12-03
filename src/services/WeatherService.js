const API_KEY ='bfecb2734667adabf908046650b506cf'
const BASE_URL='https://api.openweathermap.org/data/2.5/'

const getWeatherData= (infoType, searchParams) => {
    const url =new URL (BASE_URL + infoType)
    url.search= new URLSearchParams({...searchParams, appid: API_KEY });

    return fetch(url)
   
};
const formatToLocalTime=(
secs, 
offset,
  format="cccc, dd LLL yyyy' | Local time: 'hh:mm a"
)=> DateTime.fromSeconds(secs + offset, {zone: "utc"}).toFormat(format);



const formatCurrent = (data) =>{
    const{ 
        coord: { lat, lon}, 
    main: {temp, feels_like, temp_min, temp_max,humidity},
    name,
    dt,
    sys:{country, sunrise, sunset},
    weather,
    wind: {speed},
    timezone,
}=data;

const {main:details, icon}= weather[0];
const formattedLocalTime = formatToLocalTime(dt, timezone);
return {};
};

const getFormattedWeatherData =async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
    .then();
}
export default getFormattedWeatherData;