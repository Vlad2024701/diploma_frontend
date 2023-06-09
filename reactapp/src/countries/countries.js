import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/countries.css'
import React, { useEffect, useState } from "react";
import { event } from "jquery";


function Countries() {

    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/country/GetCountries`)
            .then(response => response.json())
            .then(countries => {
                console.log(countries);
                setCountry(countries);
                if(countries.length > 0)
                    setSelectedCountry(countries[0].id)
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

    const [selectedCountry, setSelectedCountry] = useState(null);


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
                        <select className="countriesSelect" onChange={(event)=>{setSelectedCountry(event.target.value)}}>
                            {countries.map((country) =>
                                <option value={country.id}>{country.name}</option>
                            )}
                        </select>
                    </li>
                    <li className="countriesLi">
                        <select className="citiesSelect">
                            {cities.filter((city)=>city.countryId == selectedCountry)
                            .map((city) =>
                                <option>{city.name}</option>
                            )}
                        </select>
                    </li>
                </ul>
                <button className="countriesButton" type="button"><Link to='/main' className="countriesLink">Назад</Link></button>
                <button className="countriesButton" type="button"><Link to='/countriesAdd' className="countriesLink">Добавить</Link></button>
                <button className="countriesButton" type="button"><Link to='/countriesDelete' className="countriesLink">Удалить</Link></button>
            </div>
        </>
    );
}

export default Countries;
