import React from "react";

function Filter({ onSelect }) {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <>
      <div>
        <select onChange={selectHandler} className=' dark:bg-darkBlue bg-white text-black dark:text-white py-6 px-8 rounded-lg shadow-lg outline-none border-none t font-nunito placeholder:text-xl cursor-pointer'>
        <option className="option cursor-pointer" value="All">
           Filter By Region
          </option>
          <option className="py-6 px-8" value="Africa" >
            Africa
          </option>
          <option className="option cursor-pointer" value="America">
            America
          </option>
          <option className="option cursor-pointer" value="Asia">
            Asia
          </option>
          <option className="option cursor-pointer" value="Europe">
            Europe
          </option>
          <option className="option cursor-pointer" value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </>
  );
}

export default Filter;
