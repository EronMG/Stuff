import { useCity } from "../context/CityContext";
import Blur from "./Blur";
import useWeatherData from "./DataURL";

const MainScreen = () => {
  const { city, isSubmitted } = useCity();
  const { weatherData, loading } = useWeatherData(city, isSubmitted);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Main h-[100vh] absolute w-full justify-between flex">
      <div className="flex flex-row gap-[10px] items-end ml-[120px] mb-[59px]">
        <div className="flex flex-row items-center gap-[20px]">
          <h1 className="font-roboto text-primary text-[143px] tracking-[-11px]">
            {Math.round(weatherData.main.temp)}
          </h1>
          <div className="flex flex-col">
            <h2 className="font-roboto text-primary text-[60px] h-[77px]">
              {weatherData?.name}
            </h2>
            <p className="font-roboto text-primary text-[18px]">
              06:09 - Monday, 9 Sep ‘23
            </p>
          </div>
          <img
            src="/src/assets/outline.svg"
            alt=""
            className="pl-[20px] pt-[20px]"
          />
        </div>
      </div>
      <Blur />
    </div>
  );
};
export default MainScreen;
