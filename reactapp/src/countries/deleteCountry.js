import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/countries.css'
import React, { useEffect, useState } from "react";
import {StoreContext}  from '../utils/store';


function CountriesDelete() {

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
                if(cities.length > 0)
                    setSelectedCity(cities[0].id)
            });
    }, [])

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const {userStore} = React.useContext(StoreContext); 
    const [user, setUser] = userStore;

    function componentDeleteCity(event) {
        event.preventDefault()
        console.log(selectedCity);
        fetch(`http://localhost:5215/api/city/${selectedCity}/deleteCity`,
        {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
        })
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Что-то пошло не так');
        })
        .then(gotCity => {
            console.log(gotCity);
            alert(`Город удален успешно!`);
            setCities(cities.filter((city)=>city.id!=selectedCity));
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    function componentDeleteCountry(event) {
        event.preventDefault()
        console.log(selectedCountry);
        fetch(`http://localhost:5215/api/country/${selectedCountry}/deleteCountry`,
        {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
        })
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Что-то пошло не так');
        })
        .then(gotUser => {
            console.log(gotUser);
            alert(`Страна удалена успешно!`);
            setCountry(countries.filter((country)=>country.id!=selectedCountry));
            setCities([]);
        })
        .catch((error) => {
            alert(error.message);
        });
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
                        <option>Выберите страну</option>
                            {countries.map((country) =>
                                <option value={country.id}>{country.name}</option>
                            )}
                        </select>
                    </li>
                    <li className="countriesLi">
                        <select className="citiesSelect" onChange={(event)=>{setSelectedCity(event.target.value)}}>
                            <option >Выберите город</option>
                            {cities.filter((city)=>city.countryId == selectedCountry)
                            .map((city) =>
                                <option value={city.id}>{city.name}</option>
                            )}
                        </select>
                    </li>
                </ul>
                <button className="countriesButton" type="button"><Link to='/countries' className="countriesLink">Назад</Link></button>
                <button className="countriesButton" type="button" onClick={componentDeleteCity}>Удалить город</button>
                <button className="countriesButton" type="button" onClick={componentDeleteCountry}>Удалить страну со всеми городами</button>
            </div>
        </>
    );
}

export default CountriesDelete;
