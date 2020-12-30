import React from "react";
import Calendar from "./Calendar";

export default () => {
  const headers = ["Home", "Workout", "Exercises"];

  return (
    <div>
      <div className="w-full h-20 shadow-md flex items-center justify-between">
        <div className="flex divide-x-2 mx-20">
          {headers.map((header) => (
            <div className="px-12 h-12 flex items-center">
              <div>{header}</div>
            </div>
          ))}
        </div>
        <button className="bg-green-300 hover:bg-green-500 px-2 h-12 rounded-md mx-12">
          Workout +
        </button>
      </div>
      <div className="flex ">
        <div className="w-96 h-screen hidden lg:block shadow-md">
          <div className="my-6 mt-2 mx-2 shadow-md rounded-md p-2 bg-white">
            <div>6:30 PM 12/29/2020</div>
            <div>45 minutes</div>
            <div>Run</div>
          </div>
          <div className="my-4 mx-2 shadow-md rounded-md p-2 bg-white">
            <div>5:30 PM 12/28/2020</div>
            <div>60 minutes</div>
            <div>Legs</div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="mt-8 flex justify-center">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};
