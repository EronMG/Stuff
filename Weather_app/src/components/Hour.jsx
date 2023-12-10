import { useCity } from "../context/CityContext";
import { FaCloudRain } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoMdCloudy } from "react-icons/io";
import { WiDayLightning } from "react-icons/wi";
import { MdFoggy } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
const Hour = () => {
  const { weatherData1, loading, error } = useCity();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }
  const timing = [
    {
      id: 1,
      time: "09:00",
      weath: weatherData1.list[0].weather[0].main,
      temp: weatherData1.list[0].main.temp,
    },
    {
      id: 2,
      time: "12:00",
      weath: weatherData1.list[1].weather[0].main,
      temp: weatherData1.list[1].main.temp,
    },
    {
      id: 3,
      time: "15:00",
      weath: weatherData1.list[2].weather[0].main,
      temp: weatherData1.list[2].main.temp,
    },
    {
      id: 4,
      time: "18:00",
      weath: weatherData1.list[3].weather[0].main,
      temp: weatherData1.list[3].main.temp,
    },
    {
      id: 5,
      time: "21:00",
      weath: weatherData1.list[4].weather[0].main,
      temp: weatherData1.list[4].main.temp,
    },
    {
      id: 6,
      time: "00:00",
      weath: weatherData1.list[5].weather[0].main,
      temp: weatherData1.list[5].main.temp,
    },
    {
      id: 7,
      time: "03:00",
      weath: weatherData1.list[6].weather[0].main,
      temp: weatherData1.list[6].main.temp,
    },
    {
      id: 8,
      time: "06:00",
      weath: weatherData1.list[7].weather[0].main,
      temp: weatherData1.list[7].main.temp,
    },
  ];

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
    <div className="flex flex-col gap-[54px] mt-10">
      <h2 className="text-primary font-roboto text-[18px] flex justify-center">
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
            <p className="text-black font-roboto text-[24px]">
              {Math.round(item.temp)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hour;
