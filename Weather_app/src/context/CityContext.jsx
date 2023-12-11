import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherData1, setWeatherData1] = useState(null);
  const [degrece, setDegrece] = useState("metric");

  const handleCity = useCallback((e) => {
    setCity(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      setWeatherData(null);
      setError(null);
      const apiKey = "bc2069a7f9f2508b86bb74053e5eaeec";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      const response1 = await axios.get(apiUrl1);

      if (response.status && response1.status === 404) {
        throw new Error("Город не найден");
      }
      setWeatherData(response.data);
      setWeatherData1(response1.data);
    } catch (err) {
      setError(err);
      console.log("error: ", err);
    } finally {
      setLoading(false);
    }
  }, [city]);

  const handleToggleCelsius = useCallback(() => {
    setDegrece("metric");
  }, []);

  const handleToggleFahrenheit = useCallback(() => {
    setDegrece("imperial");
  }, []);

  const value = useMemo(
    () => ({
      city,
      error,
      loading,
      handleCity,
      handleSubmit,
      handleToggleCelsius,
      handleToggleFahrenheit,
      weatherData,
      weatherData1,
      degrece,
    }),
    [
      city,
      handleCity,
      handleSubmit,
      loading,
      error,
      weatherData,
      weatherData1,
      handleToggleCelsius,
      handleToggleFahrenheit,
      degrece,
    ]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

export const useCity = () => {
  return useContext(CityContext);
};
