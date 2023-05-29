import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/hotels.css'
import React, { useEffect, useState } from "react";

function Hotels() {

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/hotel/getHotels')
            .then(response => response.json())
            .then(hotels => {
                setHotels(hotels);
                console.log(hotels);
            });
    }, [])

    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/city/getCities')
            .then(response => response.json())
            .then(cities => {
                setCities(cities);
                console.log(cities);
            });
    }, [])

    if (!hotels && !cities) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )
    return (
        <>
            <Header />
            <div className="hotelsMainDiv">
                {hotels.map((hotel) =>
                    <Link to={`/hotel/${hotel.id}`} className="hotelsLink">
                        <div className="hotelsDivPreview">
                            <a className="hotelsImgA">Отель {hotel.name}</a>
                            <img className="hotelsImg" src='/images/tour1.jpg' />
                            
                            <a className="hotelsImgA">
                                <a className="hotelsImgA">Город:</a> 
                                <a>
                                    {cities.length ? cities.find(item=>item.id == hotel.cityId).name : 'Loading'}
                                </a>
                                <br />
                            </a>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Hotels;
