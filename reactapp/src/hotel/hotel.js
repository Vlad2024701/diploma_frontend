import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/hotel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from "react";
import { StoreContext } from "../utils/store";

function Hotel() {

    const { id } = useParams();
    const { userStore } = React.useContext(StoreContext);
    const [user, setUser] = userStore;
    const [hotel, setHotel] = useState(null);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/hotel/GetHotelById?id=${id}`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(hotel => {
                console.log(hotel.rooms);
                setHotel(hotel);
            });
    }, [])

    if (!hotel) return (
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
                    <h2 className="hotelInfoH2">Отель {hotel.name}</h2>
                    <img className="hotelInfoImg" src={hotel.imageURL} />
                </div>
                <p className="hotelP" align="justify">{hotel.hotelDescription}</p>
                <Carousel className="hotelCarousel">
                {hotel.rooms.map((room) =>
                        <div className="hotelDivCarousel">
                            <img className="hotelImgCarousel" src={room.imageURL} />
                            <p className="legend">{room.name}</p>
                        </div>
                )}
                </Carousel>
                <p className="hotelP" align="justify">Предоставляемые комнаты: 
                {hotel.rooms.map((room) => <p className="hotelPGet"> 
                <Link to={`/room/${room.id}`} className="hotelLinkRoom">{room.name}</Link> с количеством постояльцев: {room.numberOfGuests} </p> )}</p>
                
                {user ? user.role =='admin' ? 
                    <div>
                        <button className="hotelsAddHotelButton"><Link to={'/addRoom'} className="toursAddTourLink"> Добавить номер</Link></button>
                    </div>
                    : '' : ''}
                <button className="roomButton" type="button"><Link to='javascript:history.back()' className="roomLink">Назад</Link></button>
            </div>
        </>
    );
}

export default Hotel;
