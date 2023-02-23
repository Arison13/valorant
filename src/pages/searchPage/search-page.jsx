import React, { useState } from "react";

// https://docs.henrikdev.xyz/valorant.html
//docs for API thats gonna be use to power this page
export const SearchPage = () => {
  const ButtonOption = ({ text }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const buttonStyles =
      "py-2 px-4 lg:w-auto w-4/6 shadow-lg shadow-[#5589bdff] font-semibold font-mono rounded-md bg-slate-100 text-[#FF4655]";
    return (
      <div id="button-container" className={`relative ${buttonStyles}`}>
        <button onClick={() => setShowDropDown(!showDropDown)}>{text}</button>
        <div
          className={`${
            showDropDown
              ? "opacity-100 visible translate-x-0 relative"
              : "opacity-0 invisible pointer-events-none translate-x-24 absolute"
          } transition-all ease-in bg-black rounded-sm flex flex-col`}>
          <p> Dropdown 1 </p>
          <p> Dropdown 2</p>
          <p> Dropdown 3</p>
        </div>
      </div>
    );
  };
  const SearchOptionsContainer = () => {
    return (
      <div className="flex lg:flex-row flex-col w-full justify-center items-center gap-6 p-4">
        <ButtonOption text={"Search Latest Matches"} />
        <ButtonOption text={"Search MMR History"} />
        <ButtonOption text={"Search Player Profile"} />
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-between items-center gap-2 w-full">
      <p className="mt-4 lg:w-1/6 w-3/6 p-2 shadow-md  bg-[#0F1923] font-semibold text-lg text-[#99ABB] font-mono rounded-md text-center ">
        Search Options
      </p>

      <SearchOptionsContainer />
    </div>
  );
};

// border-b border-[#FF4655]
