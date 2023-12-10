import { useEffect, useState } from "react";
import { useCity } from "../context/CityContext";
import Blur from "./Blur";
import Input from "./Input";
import MyMap from "./Map";

const MainScreen = () => {
  const { weatherData } = useCity();
  const [city, setCity] = useState("");
  useEffect(() => {
    if (
      weatherData &&
      weatherData.weather &&
      weatherData.weather[0] &&
      weatherData.weather[0].main
    ) {
      setCity(weatherData.weather[0].main);
    } else {
      setCity("clouds");
    }
  }, [weatherData]);
  const snowBackground = "/src/assets/Winter1.jpeg";
  const cloudsBackground = "/src/assets/Clouds.jpeg";
  const rainBackground = "/src/assets/rainMain.jpg";
  const ligthBackground = "/src/assets/lightningMain.jpeg";
  const mistyBackground = "/src/assets/mistyMain.jpeg";
  let backgroundImage;
  if (city === "Snow") {
    backgroundImage = snowBackground;
  } else if (city === "Rain") {
    backgroundImage = rainBackground;
  } else if (city === "Clouds") {
    backgroundImage = cloudsBackground;
  } else if (city === "Thunderstorm") {
    backgroundImage = ligthBackground;
  } else {
    backgroundImage = mistyBackground;
  }
  return (
    <div
      className="Main h-[100vh] absolute w-full justify-between flex flex-col md:flex-row "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-[22px] py-[19px] flex flex-col items-end gap-[90px] md:justify-end">
        <div className="md:hidden">
          {" "}
          <Input />
        </div>
        <MyMap />
        <div className="flex flex-row items-center gap-[10px] w-full">
          <h1 className="font-roboto text-primary text-[64px] sm:text-[120px]">
            {weatherData ? Math.round(weatherData.main.temp) : "..."}°
          </h1>
          <div className="flex flex-col">
            <h2 className="font-roboto text-primary text-[30px] h-[35px] sm:text-[48px] sm:min-h-[60px]">
              {weatherData?.name ?? "Loading..."}
            </h2>
            <p className="font-roboto text-primary text-[10px] sm:text-[16px]">
              06:09 - Monday, 9 Sep ‘23
            </p>
          </div>
          <img
            src="/src/assets/outline.svg"
            alt=""
            className="w-[35px] h-[35px] sm:w-[48px] sm:h-[48px]"
          />
        </div>
      </div>
      <Blur />
    </div>
  );
};
export default MainScreen;
