import React from "react";

function MainBody() {
  const condition = [{ precipitation: "20%", humidity: "30%", wind: "10km/h" }];
  const forcast = [
    { day: "monday", max: "13", min: "0" },
    { day: "monday", max: "13", min: "0" },

    { day: "monday", max: "13", min: "0" },
    { day: "monday", max: "13", min: "0" },
    { day: "monday", max: "13", min: "0" },
    { day: "monday", max: "13", min: "0" },
    { day: "monday", max: "13", min: "0" },
  ];

  const hourly = [
    { time: "3pm", temp: "2deg" },
    { time: "3pm", temp: "2deg" },
    { time: "3pm", temp: "2deg" },
    { time: "3pm", temp: "2deg" },
    { time: "3pm", temp: "2deg" },
    { time: "3pm", temp: "2deg" },
    { time: "3pm", temp: "2deg" },
  ];
  return (
    <div className="mt-20 w-full   h-[693px] overflow-hidden bg-red-300 grid grid-cols-3">
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

        {condition.map((cond) => (
          <div className="w-full flex gap-3 mt-4 ">
            <div className="p-2    bg-amber-200 rounded-lg flex flex-col justify-between  grow-1">
              <div className="text-2xl font-semibold">{cond.precipitation}</div>
              <div className="text-gray-500">Precipitation</div>
            </div>
            <div className="p-2 bg-amber-200 rounded-lg flex flex-col justify-between  grow-1">
              <div className="text-2xl font-semibold">{cond.precipitation}</div>
              <div className="text-gray-500">Precipitation</div>
            </div>
            <div className="p-2 bg-amber-200 rounded-lg  flex flex-col justify-between grow-1">
              <div className="text-2xl font-semibold">{cond.precipitation}</div>
              <div className="text-gray-500">Precipitation</div>
            </div>
            <div className="p-2   bg-amber-200 rounded-lg flex flex-col justify-between grow-1">
              <div className="text-2xl font-semibold">{cond.precipitation}</div>
              <div className="text-gray-500">Precipitation</div>
            </div>
          </div>
        ))}

        <div className="flex flex-col mt-4 ">
          <div className="text-2xl font-semibold">daily forcast</div>
          <div className=" w-full mt-5 flex  gap-3 flex-row ">
            {forcast.map((d) => (
              <div className="w-[60px] bg-green-300  grow-1 rounded-lg px-1 flex flex-col gap-2 items-center">
                <div className="">{d.day}</div>
                <div className="">image</div>
                <div className="flex  gap-3 justify-between">
                  <div className="text-sm">{d.min}</div>
                  <div className="text-sm">{d.max}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[450px] bg-yellow-300 rounded-3xl ml-6  overflow-visible">
        <div className="flex  mt-5 w-[90%] mx-auto justify-between ">
          <div className="text-wrap ">Hourly Forecast</div>
          <select className="rounded-lg w-[90px] px-1  bg-gray-400 border border-gray-400">
            <option value="">Monday</option>
            <option value="">Tuesday</option>
            <option value="">Wednesday</option>
            <option value="">Thursday</option>
          </select>
        </div>
        <div className="mt-5">
          {hourly.map((hour) => (
            <div className=" w-[90%] h-[60px] mx-auto rounded-lg flex justify-between p-2 items-center gap-3 mt-2 border border-gray-500 bg-gray-400">
              <div>{hour.time}</div>
              <div>{hour.temp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainBody;
