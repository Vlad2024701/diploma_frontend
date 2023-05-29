import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/countries.css'
import React, { useEffect, useState } from "react";


function CountriesDelete() {

    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/country/GetCountries`)
            .then(response => response.json())
            .then(countries => {
                console.log(countries);
                setCountry(countries);
            });
    }, [])

    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/city/GetCities`)
            .then(response => response.json())
            .then(cities => {
                console.log(cities);
                setCities(cities);
            });
    }, [])

    function getCitiesFromCountry(){

    }

    if (!countries && !cities) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )

    return (
        <>
            <Header />
            <div className="countriesMainDiv">
                <ul className="countriesUl">
                    <li className="countriesLi">Страна</li>
                    <li className="countriesLi">Города</li>
                </ul>
                <hr />
                <ul className="countriesUl">
                    <li className="countriesLi">
                        <select className="countriesSelect">
                            {countries.map((country) =>
                                <option>{country.name}</option>
                            )}
                        </select>
                    </li>
                    <li className="countriesLi">
                        <select className="citiesSelect">
                            {cities.map((city) =>
                                <option>{city.name}</option>
                            )}
                        </select>
                    </li>
                </ul>
                <button className="countriesButton" type="button"><Link to='/countries' className="countriesLink">Назад</Link></button>
            </div>
        </>
    );
}

export default CountriesDelete;
