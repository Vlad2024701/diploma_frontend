import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/tour.css';
import { StoreContext } from "../utils/store";
import React, { useEffect, useState } from "react";

function Tour() {

    const { userStore } = React.useContext(StoreContext);
    const [user, setUser] = userStore;
    const { id } = useParams();

    const [tour, setTour] = useState(null);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/tour/GetTour?id=${id}`,
            {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(tour => {
                console.log(tour);
                setTour(tour);
            });
    }, [])

    const [hotel, setHotel] = useState(null);
    useEffect(
        () => {
        if(tour){
        fetch(`http://127.0.0.1:5215/api/hotel/GetHotelById?id=${tour?.hotelId}`,
            {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(hotel => {
                console.log(hotel);
                setHotel(hotel);
            });
        }
    }, [tour])
    

    //либо так ошибку эвэйд либо tour && tour.tourName
    if (!tour) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )
    if (!hotel) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )
    return (
        <>
            <Header />
            <div className="tourMainDiv">
                <div className="tourDivInfo">
                <div className="tourDivImage">
                    <img className="tourImage" src='/images/tours/italy.jpg' />
                </div>
                    <h2 className="tourH2">{tour ? tour.tourName : 'Loading'}</h2>
                    <p className="tourP" align="justify">
                        {tour ? tour.tourDescription: 'Loading'}
                    </p>
                    <p className="tourP" align="justify">
                        Цена: {tour ? tour.cost : 'Loading'} BYN
                    </p>
                    <p className="tourP" align="justify">
                        Даты поездки: С {tour ? tour.tourTimeStart.substring(0, 10) : 'Loading'} по {tour ? tour.tourTimeEnd.substring(0, 10) : 'Loading'}
                    </p>
                    <p className="tourP" align="justify">
                        Время отправления: {tour ? tour.departureTime : 'Loading'}
                    </p>
                    <p className="tourP" align="justify">
                        Отель: {hotel ? hotel.name : 'Loading'}
                    </p>
                    <p className="tourP" align="justify">
                        Предоставляемые номера отеля: {hotel ? hotel.rooms.map((item)=> item.name + `, `) : ''}
                    </p>
                    <p className="tourP" align="justify">
                        Количество мест: {tour ? tour.places.length : 0}
                    </p>
                    <button className="tourBookedButton" type="button"><Link to={`/booking/${tour.id}`} className="tourBookedLink">Забронировать</Link></button>
                    {/* <h1>{user.id}</h1> */}
                </div>
            </div>
        </>
    );
}

export default Tour;
