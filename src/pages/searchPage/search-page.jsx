import React from "react";

// https://docs.henrikdev.xyz/valorant.html
//docs for API thats gonna be use to power this page
export const SearchPage = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 w-full">
      <p className="mt-4 w-1/6 p-2 shadow-md  bg-[#FF4655] font-semibold text-lg font-mono rounded-md border border-slate-100 text-center">
        Search Options
      </p>

      <div className="flex w-full justify-center items-center gap-6 p-4">
        <button className="py-2 px-4 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]">
          Search Latest Matches
        </button>
        <button className="py-2 px-4 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]">
          Search MMR History
        </button>
        <button className="py-2 px-4 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]">
          Search Player Profile
        </button>
      </div>
    </div>
  );
};
