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
                console.log(user.role)
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
    function componentDeleteTour(event) {
        event.preventDefault()
        console.log(tour?.id);
        fetch(`http://localhost:5215/api/tour/${tour?.id}/deleteTour`,
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
            alert(`Тур успешно удален`);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    return (
        <>
            <Header />
            <div className="tourMainDiv">
                <div className="tourDivInfo">
                {user ? user.role =='admin' ? 
                        <button className="tourBookedButton" type="button" onClick={componentDeleteTour}>Удалить тур</button>
                    : '' : ''}
                <div className="tourDivImage">
                    <img className="tourImage" src={tour.imageURL} />
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

                <button className="tourBookedButton" type="button"><Link to='javascript:history.back()' className="roomLink">Назад</Link></button>
                </div>

            </div>
        </>
    );
}

export default Tour;
