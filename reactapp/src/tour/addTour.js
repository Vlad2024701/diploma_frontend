import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/booking.css';
import React, { useEffect, useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

function AddTour() {
    const [imageFile, setFile] = useState();
    const [imageURL, setImageURL] = useState();
    const [base64Image, setBase64Image] = useState();

    const getImage = (e) => {
        setFile(e.target.files[0]);
    }
    useEffect(() => {
        if(imageFile){
            var reader = new FileReader();
            console.log(imageFile);
            reader.readAsDataURL(imageFile);
            reader.onload = function () {
                var base64data = reader.result;
                console.log(base64data);
                setBase64Image(base64data);
            }
        }
    }, [imageFile])


    function addTour(event){
        event.preventDefault();
        console.log(URL.createObjectURL(imageFile), tourName, tourDescription, selectedCity, selectedHotel, placesCount);
        console.log(URL.createObjectURL(imageFile));
        console.log(URL.createObjectURL(imageFile).toString());
        fetch(`http://127.0.0.1:5215/api/tour/AddTour`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({imageURL: base64Image,
                 tourName: tourName, 
                 tourDescription: tourDescription,
                 tourTimeStart: dateStart,
                 tourTimeEnd: dateEnd,
                 departureTime: arriveTime,
                 cost: +cost, 
                 cityId: +selectedCity, 
                 hotelId: +selectedHotel, 
                 placesCount: +placesCount})
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Заполните все поля');
        })
        .then(gotTour => {
            console.log(gotTour);
            alert(`Тур успешно добавлен!`);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [tourName, setTourName] = useState(null);
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [arriveTime, setTimeToArrive] = useState(null);
    const [tourDescription, setTourDescription] = useState(null);
    const [placesCount, setPlacesCount] = useState(null);
    const [cost, setCost] = useState(null);


    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/city/GetCities')
            .then(response => response.json())
            .then(cities => {
                setCities(cities);
            });
    }, [])

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/hotel/GetHotels')
            .then(response => response.json())
            .then(hotels => {
                setHotels(hotels);
            });
    }, [])

    if (!cities || !hotels) return (
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
                    <label className="bookingLabel">Добавьте фото (превью тура)</label>
                    <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={getImage}></input>
                    {imageFile && <img className="tourAddImg" src={URL.createObjectURL(imageFile)}></img>}

                    <label className="bookingLabel">Город</label>
                    <select className="bookingInput" name="list1"
                        onChange={(event) => { event.target.value == -1 ? setSelectedCity(null) : setSelectedCity(event.target.value) }}>
                        <option value={-1}>Куда</option>
                        {cities.map((city) => <option value={city.id}>{city.name}</option>)};
                    </select>
                    <label className="bookingLabel">Отель</label>
                    <select className="bookingInput" name="list1"
                        onChange={(event) => { event.target.value == -1 ? setSelectedHotel(null) : setSelectedHotel(event.target.value) }}>
                        <option value={-1}>Отель</option>
                        {hotels.map((hotel) => <option value={hotel.id}>{hotel.name}</option>)};
                    </select>

                    <label className="bookingLabel">Название тура</label>
                    <input className="bookingInput" type="text" placeholder="Германские достопримечательности"
                    value={tourName} onChange={(e)=>setTourName(e.target.value)}/>
                    <label className="bookingLabel">Количество пассажиров</label>
                    <input className="bookingInput" type="number" max={60} min={20} placeholder="20"
                    value={placesCount} onChange={(e)=>setPlacesCount(e.target.value)} />
                    <label className="bookingLabel">Дата отправки</label>
                    <input className="bookingInput" type="date" min={date}
                    value={dateStart} onChange={(e)=>setDateStart(e.target.value)}/>
                    <label className="bookingLabel">Дата прибытия</label>
                    <input className="bookingInput" type="date" min={dateStart}
                    value={dateEnd} onChange={(e)=>setDateEnd(e.target.value)}/>
                    <label className="bookingLabel">Время отправления</label>
                    <input className="bookingInput" type="text" placeholder="15:30"
                    value={arriveTime} onChange={(e)=>setTimeToArrive(e.target.value)}/>
                    <label className="bookingLabel">Описание тура</label>
                    <textarea className="bookingInputDescription" placeholder="Опишите тур"
                    value={tourDescription} onChange={(e)=>setTourDescription(e.target.value)}/>
                    <label className="bookingLabel">Стоимость ($)</label>
                    <input className="bookingInput" type="number" placeholder="1000"
                    value={cost} onChange={(e)=>setCost(e.target.value)}/>
                    
                    <input className="bookingSubmit" type="submit" value="Добавить тур"/>
                    <button className="bookingBack" type="button">
                        <Link to='/userBooked' className="bookingLink">Назад</Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddTour;
