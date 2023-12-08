import { FaSearch } from "react-icons/fa";
import { useCity } from "../context/CityContext";
const Nav = () => {
  const { city, handleCity, handleSubmit } = useCity();
  return (
    <div className="flex flex-col gap-[41px]">
      <div className="flex flex-row border-b-[1px] border-primary items-center">
        <input
          type="text"
          id="text"
          name="text"
          className="bg-transparent outline-none text-primary font-roboto h-[50px]"
          placeholder="Search location... "
          value={city}
          onChange={handleCity}
        />
        <FaSearch
          className="text-primary text-[20px] cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
      <p className="text-primary font-roboto text-[18px]">Weather Details...</p>
    </div>
  );
};

export default Nav;
