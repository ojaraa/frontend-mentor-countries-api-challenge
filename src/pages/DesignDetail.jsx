import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
// import germany from '../images/germany.png'
import * as RiIcons from "react-icons/ri";
import Navbar from "../components/navbar/Navbar";
import Loader from "../components/loader/Loader";
// import '../styling/style.css'

function DesignDetail() {
  const navigate = useNavigate();
  const { name } = useParams();

  // console.log(name)
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCountryData = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)

      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCountryData();
  }, [name]);

  console.log(details);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-black dark:text-white p-10  md:p-20 bg-veryLightGrey dark:bg-veryDarkBlue design-con font-nunito">
        <div className="flex items-center gap-4 cursor-pointer bg-white dark:bg-darkBlue rounded-lg w-28 p-4 mb-16 shadow-lg" onClick={() => navigate(-1)}>
          <RiIcons.RiArrowLeftLine />
          Back
        </div>

        {details?.map(
          ({
            name,
            flags,
            nativeName,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
            idd,
          }) => (
            <div className="grid grid-cols-1 mb-10 md:grid-cols-2" key={idd}>
              <div className="h-96 rounded-lg  mb-16">
                <img src={flags.png} alt={name.common}  className='h-full w-full object-cover md:w-3/4'/>
              </div>

              <div>
                <h2 className="mb-8 text-4xl font-black">{name.common}</h2>

                <div className=" grid grid-cols-1 md:grid-cols-2  items-center gap-8">
                  <div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Native Name:</p>
                      <p className="text-xl font-thin ">{name.common}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Population:</p>
                      <p className="text-xl font-thin"> {population.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Regions:</p>
                      <p className="text-xl font-thin">{region}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Sub Region:</p>
                      <p className="text-xl font-thin">{subregion}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Capital:</p>
                      <p className="text-xl font-thin">{capital}</p>
                    </div>
                  </div>

                  <div className="details-right">
                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Top Level Domain:</p>
                      <p className="text-xl font-thin">{tld}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Currencies:</p>

                      <p className="text-xl font-thin">{currencies[Object.keys(currencies)[0]].code}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6  md:mb-4">
                      <p className="font-medium text-2xl">Languages:</p>

                      <p className="text-xl font-thin">{languages[Object.keys(languages)[0]]}</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <p className="font-semibold text-3xl mt-8">Border Countries:</p>

                  <div className="flex items-center flex-wrap gap-6 mt-6  ">
                    {borders?.map((border, index) => (
                      <Link
                        to={`/${border.toLowerCase()}`}
                        className="py-4 px-8 rounded-md dark:bg-darkBlue bg-white text-2xl shadow-lg"
                        key={index}
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default DesignDetail;
