import { FaSearch } from "react-icons/fa";
import { useCity } from "../context/CityContext";

const Input = () => {
  const { city, handleCity, handleSubmit } = useCity();
  return (
    <div className="flex flex-row max-w-fit items-center border-b-[1px] border-primary sm:pb-[10px]">
      <input
        type="text"
        id="text"
        name="text"
        className="bg-transparent outline-none text-primary font-roboto h-[20px] text-[12px] sm:text-[20px] w-[113px] sm:w-[300px]"
        placeholder="Search location... "
        value={city}
        onChange={handleCity}
      />
      <FaSearch
        className="text-primary text-[12px] cursor-pointer sm:text-[28px] mr-[10px]"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Input;
