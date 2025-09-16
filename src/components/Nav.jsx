import React from "react";

function Nav() {
  return (
    <div className="mt-3 flex w-full justify-between items-center">
      <div className="logo w-[100px] h-[50px]">
        <img src="logo.svg " alt="" className="w-full h-full" />
      </div>
      <div className="cursor-pointer p-2">unit</div>
    </div>
  );
}

export default Nav;
