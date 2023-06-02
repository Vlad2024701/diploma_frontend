import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/booking.css';
import React, { useEffect, useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

function AddHotel() {
    const [imageFile, setFile] = useState();
    const [imageURL, setImageURL] = useState();
    const getImage = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setImageURL(URL.createObjectURL(e.target.files[0]));
    }

    function addTour(event){
        event.preventDefault();
        console.log(URL.createObjectURL(imageFile), hotelName, hotelDescription, selectedCity);
        fetch(`http://127.0.0.1:5215/api/hotel/AddHotel`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({imageURL: imageURL,
                 name: hotelName, 
                 hotelDescription: hotelDescription,
                 cityId: +selectedCity})
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Заполните все поля');
        })
        .then(gotTour => {
            console.log(gotTour);
            alert(`Отель успешно добавлен!`);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const [selectedCity, setSelectedCity] = useState(null);
    const [hotelName, setHotelName] = useState(null);
    const [hotelDescription, setHotelDescription] = useState(null);



    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/city/GetCities')
            .then(response => response.json())
            .then(cities => {
                setCities(cities);
            });
    }, [])

    if (!cities) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    var date = currentDate.toISOString().substring(0, 10);
    return (
        <>
            <Header />
            <div className="bookingMainDiv">
                <form action="" method="post" name="form" className="bookingForm" onSubmit={addTour}>
                    <label className="bookingLabel">Добавьте фото (превью отеля)</label>
                    <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={getImage}></input>
                    {imageFile && <img className="tourAddImg" src={URL.createObjectURL(imageFile)}></img>}

                    <label className="bookingLabel">Город</label>
                    <select className="bookingInput" name="list1"
                        onChange={(event) => { event.target.value == -1 ? setSelectedCity(null) : setSelectedCity(event.target.value) }}>
                        <option value={-1}>Куда</option>
                        {cities.map((city) => <option value={city.id}>{city.name}</option>)};
                    </select>

                    <label className="bookingLabel">Название отеля</label>
                    <input className="bookingInput" type="text" placeholder="Турист"
                    value={hotelName} onChange={(e)=>setHotelName(e.target.value)}/>
                    <label className="bookingLabel">Описание отеля</label>
                    <textarea className="bookingInputDescription" placeholder="Опишите отель"
                    value={hotelDescription} onChange={(e)=>setHotelDescription(e.target.value)}/>
                    <input className="bookingSubmit" type="submit" value="Добавить Отель"/>
                    <button className="bookingBack" type="button">
                        <Link to='/userBooked' className="bookingLink">Назад</Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddHotel;
