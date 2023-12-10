import { useCity } from "../context/CityContext";

const WeatherInfo = ({ label, value, img }) => (
  <div className="flex  md:flex-row md:items-center gap-2 md:gap-5 justify-between">
    <p className="text-black font-roboto text-[14px] mb-2 md:mb-0 sm:text-[18px]">
      {label}
    </p>
    <div className="flex items-center gap-2">
      <p className="text-primary font-roboto text-[14px] sm:text-[18px]">
        {value}
      </p>
      <img
        src={img}
        alt="icon"
        className="w-[15px] h-[20px] sm:w-[20px] sm:h-[25px]"
      />
    </div>
  </div>
);

const Weather = () => {
  const { weatherData, loading, error } = useCity();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div className="flex flex-col gap-3 md:gap-[30px] mt-20">
      <h2 className="text-primary font-roboto text-[14px] uppercase flex justify-center mb-2 sm:text-[18px]">
        {weatherData.weather[0].main}
      </h2>
      <WeatherInfo
        img="/src/assets/TempMax.svg"
        label="Temp max"
        value={`${Math.round(weatherData.main.temp_max)}°`}
      />
      <WeatherInfo
        img="./src/assets/TempMin.svg"
        label="Temp min"
        value={`${Math.round(weatherData.main.temp_min)}°`}
      />
      <WeatherInfo
        img="/src/assets/outline.svg"
        label="Humidity"
        value={`${weatherData.main.humidity}%`}
      />
      <WeatherInfo
        img="/src/assets/raindrop.svg"
        label="Cloudy"
        value={`${weatherData.clouds.all}%`}
      />
      <WeatherInfo
        img="/src/assets/wind.svg"
        label="Wind"
        value={`${Math.round(weatherData.wind.speed)}km/h`}
      />
    </div>
  );
};

export default Weather;
