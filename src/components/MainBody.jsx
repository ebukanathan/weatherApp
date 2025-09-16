import React from "react";

function MainBody() {
  const condition = { precipitation: "20%", humidity: "30%", wind: "10km/h" };
  return (
    <div className="mt-20 w-full grid grid-cols-3">
      <div className=" col-span-2 rounded-3xl flex flex-col">
        <div className="bg-blue-400 text-white text-4xl h-[30vh] font-bold px-6 flex justify-between  items-center rounded-lg ">
          <div className="flex flex-col">
            Lagos Nig
            <span className="font-semibold text-xl">
              {new Date().toDateString()}
            </span>
          </div>
          <div className="">23 c</div>
        </div>
        {/* <div className="text-white text-3xl font-semibold ml-10">
          Sunny & Clear
        </div> */}
        <div className="w-full flex ">
          {condition.map((cond) => (
            <div className="p-2 flex flex-col justify-between">
              <div className="text-2xl font-semibold">{cond.precipitation}</div>
              <div className="text-gray-500">Precipitation</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[450px] bg-yellow-300 rounded-3xl ml-6">mmmm</div>
    </div>
  );
}

export default MainBody;
