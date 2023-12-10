import Hour from "./Hour";
import Nav from "./Nav";
import Weather from "./Weather";

const Blur = () => {
  return (
    <div className="flex justify-center w-full md:w-[526px] h-fit">
      <div className="md:py-[40px]  md:pl-[30px] flex flex-col items-center md:items-start gap-4 md:gap-[77px] backdrop-filter backdrop-blur-md w-full border-t-[5px] md:border-t-0 md:border-l-[5px] border-black1 px-[45px]">
        <div className="flex flex-col gap-4 md:gap-[45px] max-w-[354px] w-full ">
          <Nav />
          <Weather />
        </div>
        <div className="flex flex-col gap-4 md:gap-[39px] mt-20 max-w-[354px] w-full">
          <div className="h-[1px] bg-primary w-full" />
          <Hour />
        </div>
      </div>
    </div>
  );
};

export default Blur;
