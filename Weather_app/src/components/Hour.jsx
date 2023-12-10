import { useCity } from "../context/CityContext";
import { FaCloudRain } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoMdCloudy } from "react-icons/io";
import { WiDayLightning } from "react-icons/wi";
import { MdFoggy } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";

const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
const Hour = () => {
  const { weatherData1, loading, error, degrece } = useCity();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }
  const timing = [];

  for (let i = 0; i < 8; i++) {
    const time = `${(i * 3) % 24}:00`;
    const weatherIndex = i % weatherData1.list.length;

    timing.push({
      id: i + 1,
      time,
      weath: weatherData1.list[weatherIndex].weather[0].main,
      temp:
        degrece === "metric"
          ? weatherData1.list[weatherIndex].main.temp
          : convertToFahrenheit(weatherData1.list[weatherIndex].main.temp),
    });
  }

  const getIcon = (weatherCondition, time) => {
    if (time >= 0 && time < 6) {
      switch (weatherCondition) {
        case "Clouds":
          return <IoMdCloudy />;
        case "Rain":
          return <FaCloudRain />;
        case "Snow":
          return <FaRegSnowflake />;
        case "Thunderstorm":
          return <WiDayLightning />;
        case "Clear":
          return <IoMdMoon />;
        default:
          return <MdFoggy />;
      }
    }

    switch (weatherCondition) {
      case "Clouds":
        return <IoMdCloudy />;
      case "Rain":
        return <FaCloudRain />;
      case "Snow":
        return <FaRegSnowflake />;
      case "Thunderstorm":
        return <WiDayLightning />;
      case "Clear":
        return <IoMdSunny />;
      default:
        return <MdFoggy />;
    }
  };
  return (
    <div className="flex flex-col gap-[54px] mt-0">
      <h2 className="text-primary font-roboto text-[18px] flex justify-center md:justify-start">
        Today’s Weather Forecast...
      </h2>
      <div className="flex flex-col gap-[30px]">
        {timing.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between items-center"
          >
            <span className="text-[48px] text-primary">
              {" "}
              {getIcon(item.weath, parseInt(item.time.split(":")[0]))}
            </span>
            <div className="flex flex-col">
              <h2 className="text-primary font-roboto text-[18px]">
                {item.time}
              </h2>
              <p className="text-black font-roboto text-[18px]">{item.weath}</p>
            </div>
            <p className="text-black font-roboto text-[24px] w-[58px]">
              {Math.round(item.temp)} {degrece === "metric" ? "°C" : "°F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hour;
