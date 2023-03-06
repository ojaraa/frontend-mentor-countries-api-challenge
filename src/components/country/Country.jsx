import { useState, useEffect } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
function Country({data}) {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     axios.get(`https://restcountries.com/v3.1/all`)
    //         .then((res) => {
    //             setCountries(res.data)
    //             setLoading(false)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])
    // console.log(countries)
    
    return (
        <>
            <div className="box-container">
                {countries.slice(10, 30).map((item, i) => {
                    const {name} = item
                    return(
                        <div className="box" key={item.idd.suffix}>
                        <div className="flag-img-con">
                            <img src={item.flags.svg} alt={item.name.common} />
                        </div>

                        <div className="box-details">
                            <h3>{item.name.common}</h3>

                            <div className="title">
                                Population: {item.population}
                            </div>

                            <div className="title">
                                Region: {item.region}
                            </div>

                            <div className="title">
                                Capital: {item.capital}
                            </div>

                            <Link to={`/${name}`}>Lean</Link>
                        </div>
                    </div>
                    )
})}
            </div>
        </>
    )
}

export default Country