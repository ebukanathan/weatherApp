import React, { useEffect, useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(`${city} is submitted`);
    getSearchLocation(city);
  };

  const getSearchLocation = async (location) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`
      );

      const data = await response.json();
      setSearch(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(search);

  return (
    <div className="relative">
      <form className="mt-6 w-1/2 mx-auto flex gap-2" onSubmit={HandleSubmit}>
        <input
          type="text"
          value={city}
          className="p-2 outline-1 outline-gray-300 rounded-md w-full"
          placeholder="Search for any city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Search
        </button>
      </form>
      <div className=" ">
        {search.length > 0 ? (
          <div className="w-1/3  h-[30vh] mb-1 absolute top-[100%] left-[25%] bg-amber-500 text-black overflow-scroll flex flex-col">
            {search?.map((item, index) => (
              <div key={index} className="hover:bg-amber-50 cursor-pointer">
                {" "}
                {item.name},{item.country}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Search;
