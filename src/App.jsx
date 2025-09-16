import React from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import MainBody from "./components/MainBody";

function App() {
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
