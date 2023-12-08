// В отдельном файле, например, useWeatherData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherData = (city, isSubmitted) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiKey = "bc2069a7f9f2508b86bb74053e5eaeec";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.status === 404) {
          throw new Error("Город не найден");
        }

        setWeatherData(response.data);
      } catch (err) {
        setError(err);
        console.log("error: ", err);
      } finally {
        setLoading(false);
      }
    };

    if (isSubmitted) {
      fetchData();
    }
  }, [city, isSubmitted]);

  return { weatherData, loading, error };
};

export default useWeatherData;
