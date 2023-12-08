import { useCity } from "../context/CityContext";
import useWeatherData from "./DataURL";
const Weather = () => {
  const { city, isSubmitted } = useCity();
  const { weatherData, loading } = useWeatherData(city, isSubmitted);
  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(weatherData.main);

  const WeatherInfo = ({ label, value, img }) => (
    <div className="flex justify-between">
      <p className="text-black font-roboto text-[16px]">{label}</p>
      <div className="flex flex-row items-center">
        <p className="text-primary font-roboto text-[16px]">{value}</p>
        <img src={img} alt="icon" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-[30px]">
      <h2 className="text-primary font-roboto text-[18px] uppercase">
        {weatherData.weather[0].main}
      </h2>
      {weatherData?.main && (
        <>
          <WeatherInfo
            label="Temp max"
            value={Math.round(weatherData.main.temp_max)}
            img="/src/assets/TempMax.svg"
          />
          <WeatherInfo
            label="Temp min"
            value={Math.round(weatherData.main.temp_min)}
            img="/src/assets/TempMin.svg"
          />
          <WeatherInfo
            label="Humidity"
            value={`${weatherData.main.humidity}%`}
            img="/src/assets/outline.svg"
          />
          <WeatherInfo
            label="Cloudy"
            value={`${weatherData.clouds.all}%`}
            img="/src/assets/raindrop.svg"
          />
          <WeatherInfo
            label="Wind"
            value={`${Math.round(weatherData.wind.speed)}km/h`}
            img="/src/assets/wind.svg"
          />
        </>
      )}
    </div>
  );
};

export default Weather;
