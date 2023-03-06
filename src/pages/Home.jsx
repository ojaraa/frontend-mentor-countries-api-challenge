import { useState, useEffect } from "react";
import axios from "axios";
import Country from "../components/country/Country";
import Filter from "../components/Filter";
import * as RiIcons from "react-icons/ri";
import Navbar from "../components/navbar/Navbar";
// import '../styling/style.css'
import { Link } from "react-router-dom";
import Loader from "../components/loader/Loader";
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);


  const options = ["Africa", "Asia", "America", "Oceania", "Europe"];
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getCountryByRegion = (regionName) => {
    axios
      .get(`https://restcountries.com/v3.1/region/${regionName}`)
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(query);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar 
        />
      <div className=" min-h-screen dark:text-white p-8  md:p-24 bg-veryLightGrey text-black dark:bg-veryDarkBlue">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between mb-8">
          <div className="inputBox flex  py-6 px-8 rounded-lg gap-12 dark:bg-darkBlue bg-white text-black dark:text-white shadow-lg">
            <RiIcons.RiSearchLine
              style={{  fontSize: "2rem", cursor: "pointer" }}
              className="text-black dark:text-white"
            />
            <input
              type="text"
              placeholder="Search for a country....."
              className="outline-none border-none p-0 bg-transparent font-nunito placeholder:text-xl  text-black dark:text-white text-2xl "
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* <div className="dropDown">
            <div className="dropdownContainer">
              <div className="dropdown-header" onClick={toggling}>
                {selectedOption || "Filter by Region"}

                <RiIcons.RiArrowDropDownLine
                  style={{
                    color: "white",
                    fontSize: "2.5rem",
                    cursor: "pointer",
                  }}
                />
              </div>
              {isOpen && (
                <div className="dropdownlist-container">
                  <ul className="dropdownlist">
                    {regions.map((list, i) => (
                      <li
                        className="list-item"
                        onClick={onOptionClicked(list)}
                        key={Math.random()}
                        onChange={(e) => setFilterParam(e.target.value)}
                      >
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div> */}

          <Filter onSelect={getCountryByRegion} />
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16 lg:gap-12">
          {countries
            ?.filter((item) =>
              query.toLowerCase() === ""
                ? item
                : item.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map(({ name, capital, region, population, item, flags, idd }) => {
              return (
                <Link
                  to={`/${name.common}`}
                  className=" w-full shadow-lg hover:scale-105 duration-500"
                  key={Math.random()}
                >
                  <div className="flag-img-con h-72 ">
                    <img
                      src={flags.svg}
                      alt={name.common}
                      className="h-full w-full object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="box-details dark:bg-darkBlue bg-white text-black dark:text-white  py-7 px-4 rounded-b-lg ">
                    <h3 className="mb-2 font-extrabold text-3xl font-nunito">
                      {name.common}
                    </h3>

                    <div className="text-xl mb-3 flex items-center gap-1">
                      Population: {population.toLocaleString()}
                    </div>

                    <div className="text-xl mb-3 flex items-center gap-1">Region: {region}</div>

                    <div className="text-xl mb-3 flex items-center gap-1">Capital: {capital}</div>

                   
                  </div>
                </Link>
              );
            })}
        </div>
        {/* <Country data={search(countries)}/> */}
      </div>
    </>
  );
}

export default Home;
