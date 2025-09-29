import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import MainBody from "./components/MainBody";
import { fetchWeatherApi } from "openmeteo";

function App() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setError(null);
      },
      (error) => {
        setError("error getting location" + error.message);
      }
    );
  };

  const params = {
    longitude: location.lon,
    latitude: location.lat,
    hourly: "temperature_2m",
  };
  // const url = "https://api.open-meteo.com/v1/forecast";

  // const responses = fetchWeatherApi(url, params);
  // const response = responses[0];

  // console.log(response);

  return (
    <div className="w-2/3 mx-auto ">
      <Nav />
      <div className="w-2/3 mx-auto mt-6  text-center font-bold text-3xl">
        How’s the sky looking today?
      </div>
      <button onClick={getLocation}>get location now</button>
      <Search />
      <MainBody />
    </div>
  );
}

export default App;
