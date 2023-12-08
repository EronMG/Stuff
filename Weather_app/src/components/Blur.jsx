import Nav from "./Nav";
import Weather from "./Weather";

const Blur = () => {
  return (
    <div className="relative flex justify-center w-[526px]">
      <div className="relative group w-full">
        <div className="blur w-full h-full absolute top-0 left-0 "></div>
        <div className="absolute z-10">
          <Nav />
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Blur;
