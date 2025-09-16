import React from "react";

function Search() {
  return (
    <div className="mt-6 w-1/2 mx-auto flex gap-2">
      <input
        type="text"
        className="p-2 outline-1 outline-gray-300 rounded-md w-full"
        placeholder="Search for any city"
      />
      <button className="bg-blue-600 text-white p-2 rounded-md">Search</button>
    </div>
  );
}

export default Search;
