import React, { useState } from "react";

function Search() {
  const [city, setCity] = useState("");

  const [search, setSearch] = useState(null);
  const [place, setPlace] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);

    console.log(`${city} is submitted`);
    getSearchLocation(city);
  };

  const handleClick = (item) => {
    setPlace(item);
    setCity("");
    console.log(item.name);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setPlace;
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
          value={place.name}
          className="p-2 outline-1 outline-gray-300 rounded-md w-full"
          placeholder="Search for any city"
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Search
        </button>
      </form>
      <div className=" ">
        {search ? (
          <div className="w-1/3  h-[30vh] mb-1 absolute top-[100%] left-[25%] bg-amber-500 text-black overflow-scroll flex flex-col">
            {search?.map((item, index) => (
              <div
                key={index}
                className="hover:bg-amber-50 cursor-pointer"
                onClick={() => handleClick(item)}
              >
                {" "}
                {item.name},{item.country}
              </div>
            ))}
          </div>
        ) : city ? (
          <div className="w-1/3  mb-1 absolute top-[100%] left-[25%] bg-amber-500 text-black overflow-scroll flex flex-col">
            searching
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Search;
