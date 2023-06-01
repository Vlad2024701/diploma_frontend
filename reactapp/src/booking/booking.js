import Header from "../Header/header";
import { Link, useParams } from 'react-router-dom';
import '../css/booking.css'
import React, { useEffect, useState } from "react";
import { StoreContext } from '../utils/store';


function Booking() {
    const { userStore } = React.useContext(StoreContext);
    const [user, setUser] = userStore;
    const [email, setEmail] = useState(user.email);
    const [placesCount, setPlacesCount] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState(user.email);

    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/city/getCities')
            .then(response => response.json())
            .then(selectedRoom => {
                setSelectedRoom(selectedRoom);
            });
    }, [])

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
            if (tour) {
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

    function componentAddBooking(event) {
        event.preventDefault()
        console.log();
        fetch(`http://localhost:5215/api/user/${user.id}/updateUser`,
            {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tourId: tour.Id, placesCount: placesCount })
            })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Неверные данные');
            })
            .then(gotUser => {
                console.log(gotUser);
                alert(`Вы обновили информацию об аккаунте`);
                userStore[1](JSON.parse(gotUser));
            })
            .catch((error) => {
                alert(error.message);
            });
    }


    //либо так ошибку эвэйд либо tour && tour.tourName
    if (!hotel || !tour) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )
    return (
        <>
            <Header />
            <div className="bookingMainDiv">
                <form action="" method="post" name="form" className="bookingForm">
                    <label className="bookingLabel">Подтверждение почты</label>
                    <input className="bookingInput" type="text" placeholder={user.email}
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="bookingLabel">Количество пассажиров</label>
                    <select className="bookingInput" name="list1"
                        onChange={(event) => { event.target.value == -1 ? setSelectedRoom(null) : setSelectedRoom(event.target.value) }}>
                        <option value={-1}>Куда</option>
                        {selectedRoom.map((room) => <option value={room.id}>{room.name}</option>)};
                    </select>
                    <input className="bookingInput" type="number" max={tour.places.length} min={1} placeholder="1"
                        value={placesCount} onChange={(e) => setPlacesCount(e.target.value)} />
                    <label className="bookingLabel">Дата отправки</label>
                    <input className="bookingInput" type="text" placeholder="date" disabled='true'
                        value={tour.tourTimeStart.substring(0, 10)} />
                    <label className="bookingLabel">Дата прибытия</label>
                    <input className="bookingInput" type="text" placeholder="date" disabled='true'
                        value={tour.tourTimeEnd.substring(0, 10)} />
                    <label className="bookingLabel">Тур</label>
                    <input className="bookingInput" type="text" placeholder="Italy" disabled='true'
                        value={tour.tourName} />
                    <label className="bookingLabel">Отель</label>
                    <input className="bookingInput" type="text" placeholder="Hotels" disabled='true'
                        value={hotel.name} />
                    <label className="bookingLabel">Стоимость</label>
                    <input className="bookingInput" type="text" placeholder="1000$" disabled='true'
                        value={hotel.cost} />
                    <input className="bookingSubmit" type="submit" value='Бронирование' />
                    <button className="bookingBack" type="button">
                        <Link to='/userBooked' className="bookingLink">Назад</Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default Booking;
