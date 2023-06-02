import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/booking.css';
import React, { useEffect, useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

function AddRoom() {
    const [imageFile, setFile] = useState();
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

    function addTour(event) {
        event.preventDefault();
        console.log(URL.createObjectURL(imageFile), roomName, selectedHotel);
        fetch(`http://127.0.0.1:5215/api/room/AddRoom`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                imageURL: base64Image,
                name: roomName,
                numberOfGuests: +numberOfGuests,
                hotelBuilding: hotelBuilding,
                windowView: windowView,
                hotelId: +selectedHotel
            })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Заполните все поля');
            })
            .then(gotTour => {
                console.log(gotTour);
                alert(`Номер успешно добавлен!`);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const [selectedHotel, setSelectedHotel] = useState(null);
    const [roomName, setRoomName] = useState(null);
    const [numberOfGuests, setNumberOfGuests] = useState(null);
    const [windowView, setWindowView] = useState(null);
    const [hotelBuilding, setHotelBuilding] = useState(null);

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/hotel/GetHotels')
            .then(response => response.json())
            .then(hotels => {
                setHotels(hotels);
            });
    }, [])

    if (!hotels) return (
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
                    <label className="bookingLabel">Добавьте фото (превью комнаты)</label>
                    <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={getImage}></input>
                    {imageFile && <img className="tourAddImg" src={URL.createObjectURL(imageFile)}></img>}

                    <label className="bookingLabel">Отель</label>
                    <select className="bookingInput" name="list1"
                        onChange={(event) => { event.target.value == -1 ? setSelectedHotel(null) : setSelectedHotel(event.target.value) }}>
                        <option value={-1}>Куда</option>
                        {hotels.map((hotel) => <option value={hotel.id}>{hotel.name}</option>)};
                    </select>

                    <label className="bookingLabel">Номер</label>
                    <input className="bookingInput" type="text" placeholder="Однокомнатный люкс"
                        value={roomName} onChange={(e) => setRoomName(e.target.value)} />
                    <label className="bookingLabel">Максимальное количество гостей</label>
                    <input className="bookingInput" type="number" placeholder="2"
                        value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} />
                    <label className="bookingLabel">Тип комнаты</label>
                    <input className="bookingInput" type="text" placeholder="Бунгало"
                        value={hotelBuilding} onChange={(e) => setHotelBuilding(e.target.value)} />
                    <label className="bookingLabel">Вид из окна</label>
                    <input className="bookingInput" type="text" placeholder="На море"
                        value={windowView} onChange={(e) => setWindowView(e.target.value)} />
                    <input className="bookingSubmit" type="submit" value="Добавить комнату" />
                    <button className="bookingBack" type="button">
                        <Link to='/userBooked' className="bookingLink">Назад</Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddRoom;
