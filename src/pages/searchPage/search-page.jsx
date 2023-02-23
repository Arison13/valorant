import React from "react";

// https://docs.henrikdev.xyz/valorant.html
//docs for API thats gonna be use to power this page
export const SearchPage = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 w-full">
      <p className="mt-4 lg:w-1/6 w-3/6 p-2 shadow-md  bg-[#0F1923] font-semibold text-lg text-[#99ABB] font-mono rounded-md text-center ">
        Search Options
      </p>

      <div className="flex lg:flex-row flex-col w-full justify-center items-center gap-6 p-4">
        <button className="py-2 px-4 lg:w-auto w-4/6 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]">
          Search Latest Matches
        </button>
        <button className="py-2 px-4 lg:w-auto w-4/6 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]">
          Search MMR History
        </button>
        <button className="py-2 px-4 lg:w-auto w-4/6 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]">
          Search Player Profile
        </button>
      </div>
    </div>
  );
};

// border-b border-[#FF4655]
