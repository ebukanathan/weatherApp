import React from "react";

function Nav() {
  return (
    <div className="mt-3 flex w-full justify-between items-center">
      <div className="logo w-[100px] h-[50px]">
        <img src="logo.svg " alt="" className="w-full h-full" />
      </div>
      <select className="cursor-pointer p-2">
        <option value="">Unit</option>
        <option value="celsius">Celsuius</option>
        <option value="farenheit">Farenheit</option>
      </select>
    </div>
  );
}

export default Nav;
