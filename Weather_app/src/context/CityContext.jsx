import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleCity = (e) => {
    setCity(e.target.value);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log(city);
  };

  return (
    <CityContext.Provider
      value={{ city, handleCity, handleSubmit, isSubmitted }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  return useContext(CityContext);
};
