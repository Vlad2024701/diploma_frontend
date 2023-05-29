import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/room.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";

function Room() {

    const { id } = useParams();

    const [room, setRoom] = useState(null);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/room/GetRoomById?id=${id}`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(room => {
                console.log(room);
                setRoom(room);
            });
    }, [])

    if (!room) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )

    return (
        <>
            <Header />
            <div className="hotelMainDiv">
                <div className="hotelInfoDiv">
                    <h2 className="hotelInfoH2">{room.name}</h2>
                    <img className="hotelInfoImg" src="/images/about1.jpg" />
                </div>
                <p className="hotelP" align="justify">В данном номере постояльцем предоставляется {room.numberOfGuests} спальных мест.</p>
                <p className="hotelP" align="justify">Здание отеля представляет из себя {room.hotelBuilding} с видом из окна {room.windowView}</p>
                <button className="roomButton" type="button"><Link to='javascript:history.back()' className="roomLink">Назад</Link></button>
            </div>
        </>
    );
}

export default Room;
