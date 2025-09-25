import React, { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import MainBody from "./components/MainBody";

function App() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setError(null);
    });
  };

  //get brower coordinate

  return (
    <div className="w-2/3 mx-auto ">
      <Nav />
      <div className="w-2/3 mx-auto mt-6  text-center font-bold text-3xl">
        How’s the sky looking today?
      </div>
      <Search />
      <MainBody />
    </div>
  );
}

export default App;
