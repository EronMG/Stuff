import Hour from "./Hour";
import Nav from "./Nav";
import Weather from "./Weather";
import { useCity } from "../context/CityContext";
const Blur = () => {
  const { handleToggleCelsius, handleToggleFahrenheit, degrece } = useCity();

  return (
    <div className="flex justify-center w-full md:w-[526px] h-full overflow-scroll">
      <div className="md:py-[40px]  md:pl-[30px] flex flex-col items-center md:items-start gap-4 md:gap-[77px] backdrop-filter backdrop-blur-md w-full border-t-[5px] md:border-t-0 md:border-l-[5px] border-black1 px-[45px] h-fit">
        <div className="flex flex-col gap-4 md:gap-[45px] max-w-[354px] w-full  ">
          <div className=" flex-row gap-[20px] hidden md:flex">
            {" "}
            <button
              onClick={handleToggleCelsius}
              className={`border-[3px] border-primary rounded-[15px] px-[20px] text-primary active:scale-95 ${
                degrece === "metric"
                  ? "bg-primary text-[black]"
                  : "bg-none  hover:bg-primary transition hover:text-[black]"
              }`}
            >
              °C
            </button>
            <button
              onClick={handleToggleFahrenheit}
              className={`border-[3px] border-primary rounded-[15px] px-[20px] text-primary active:scale-95 ${
                degrece === "imperial"
                  ? "bg-primary text-[black]"
                  : "bg-none hover:bg-primary transition hover:text-[black]"
              }`}
            >
              °F
            </button>
          </div>
          <Nav />
          <Weather />
        </div>
        <div className="flex flex-col gap-4 md:gap-[39px] mt-0 max-w-[354px] w-full">
          <div className="h-[1px] bg-primary w-full" />
          <Hour />
        </div>
      </div>
    </div>
  );
};

export default Blur;
