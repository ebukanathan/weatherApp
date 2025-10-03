import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import MainBody from "./components/MainBody";
import { fetchWeatherApi } from "openmeteo";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [location, setLocation] = useState({ lon: null, lat: null });
  // const [searchCity, setSearchCity] = useState("abuja");
  const [inputCity, setInputCity] = useState("accra");
  const [error, setError] = useState("");

  const getSearchLocation = async () => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${inputCity}&count=1&language=en&format=json`
      );

      const data = await response.json();
      console.log(data.results);
      setLocation({ lon: data.results.longitude, lat: data.results.longitude });
    } catch (err) {
      console.log(err);
    }
  };

  getSearchLocation();

  const getCurrentLocation = () => {
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

  // getCurrentLocation();

  console.log(location);

  const getWeather = async () => {
    getCurrentLocation();
    // const params = {
    //   latitude: 6.535233,
    //   longitude: 3.3489671,
    //   hourly: "temperature_2m",
    // };
    // const url = "https://api.open-meteo.com/v1/forecast";
    try {
      // const response = await fetchWeatherApi(url, params);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
      );
      // const data = await response.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  // const params = {
  //   longitude: location.lon,
  //   latitude: location.lat,
  //   hourly: "temperature_2m",
  // };
  // const url = "https://api.open-meteo.com/v1/forecast";

  // const responses = fetchWeatherApi(url, params);
  // const response = responses[0];

  // console.log(response);

  // const { data } = useQuery({
  //   queryKey: ["location"],
  //   queryFn: getSearchLocation(searchCity),
  // });

  // console.log(data);

  // getSearchLocation("abuja");
  return (
    <div className="w-2/3 mx-auto ">
      <Nav />
      <div className="w-2/3 mx-auto mt-6  text-center font-bold text-3xl">
        How’s the sky looking today?
      </div>
      {/* <div className="">{data?.map((item) => item)}</div> */}
      {/* <button onClick={getLocation}>get location now</button> */}
      {/* <Search /> */}
      <MainBody />
    </div>
  );
}

export default App;
