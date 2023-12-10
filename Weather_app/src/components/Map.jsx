import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCity } from "../context/CityContext";
const RADAR_MAPS_URL = "https://api.rainviewer.com/public/weather-maps.json";

const getMostRecentWeatherMap = async () => {
  try {
    const res = await fetch(RADAR_MAPS_URL);
    const resJson = await res.json();

    if (resJson && resJson.radar && resJson.radar.nowcast) {
      // Assuming that nowcast is an array
      const path = resJson.radar.nowcast[0]?.path;
      if (path) {
        return path;
      } else {
        console.error("Invalid response format:", resJson);
        throw new Error("Invalid response format");
      }
    } else {
      console.error("Invalid response format:", resJson);
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error fetching weather map:", error);
    throw error;
  }
};

const MyMap = () => {
  const { weatherData } = useCity();
  const [mostRecentWeatherMap, setMostRecentWeatherMap] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const path = await getMostRecentWeatherMap();
        setMostRecentWeatherMap(path);
      } catch (error) {
        // Handle error
      }
    })();
  }, []);

  if (!mostRecentWeatherMap) {
    return <div>Loading...</div>;
  }
  const initialCenter = weatherData
    ? [weatherData.coord.lat, weatherData.coord.lon]
    : [7.606, -122.332];
  return (
    <div>
      <MapContainer
        center={initialCenter}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "200px", width: "200px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TileLayer
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=bc2069a7f9f2508b86bb74053e5eaeec`}
          opacity={0.6}
          zIndex={2}
        />
      </MapContainer>
    </div>
  );
};

export default MyMap;
