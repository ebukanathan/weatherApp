import React, { useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  const HandleSubmit = (e) => {
    e.prevent.default();
    setSearch(city);
    // alert(`${search} is submitted`);
    console.log(`${search} is submitted`);
  };

  return (
    <div className="">
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
    </div>
  );
}

export default Search;
