import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/countries.css'
import React, { useEffect, useState } from "react";


function CountriesAdd() {

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    function addCountryWithCity(event) {
        event.preventDefault()
        console.log(country, city);
        fetch('http://localhost:5215/api/country/AddCountryWithCity',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ countryName: country, cityName: city })
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Такой город уже добавлен');
            })
            .then(gotCountryCity => {
                console.log(gotCountryCity);
                alert(`В страну ${gotCountryCity.countryName} был добавлен город ${gotCountryCity.cityName}`);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <>
            <Header />
            <div className="countriesMainDiv">
                <form action="" method="post" name="form" className="countriesForm" onSubmit={addCountryWithCity}>
                    <label className="countriesLabel">Country</label>
                    <input className="countriesInput" type="text" name="country" placeholder="country name"
                        value={country} onChange={(e) => setCountry(e.target.value)} />
                    <label className="countriesLabel">City</label>
                    <input className="countriesInput" type="text" name="city" placeholder="city name"
                        value={city} onChange={(e) => setCity(e.target.value)} />
                    <input className="countriesButton" type="submit" value="Добавить" />
                </form>
                <button className="countriesButton" type="button"><Link to='/countries' className="countriesLink">Назад</Link></button>
            </div>
        </>
    );
}

export default CountriesAdd;
