import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/tours.css'
import React, { useEffect, useState } from "react";
import { StoreContext } from "../utils/store";

function Tours() {

    const { userStore } = React.useContext(StoreContext);
    const [user, setUser] = userStore;

    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/city/getCities')
            .then(response => response.json())
            .then(cities => {
                setCities(cities);
            });
    }, [])


    const [tours, setTours] = useState([]);
    const [displayedTours, setDisplayedTours] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/tour/getTours')
            .then(response => response.json())
            .then(tours => {
                setTours(tours);
                setDisplayedTours(tours);
            });
    }, [])

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountPassengers, setSelectedCountPassengers] = useState(null);
    useEffect(() => {
        if (tours.length > 0) {
            var toursL = [...tours];
            if (selectedCity) {
                console.log(selectedCity);
                toursL = toursL.filter((tour) => tour.cityId == selectedCity);
                // if (selectedDate) {
                //     console.log(selectedCity);
                //     toursL = toursL.filter((tour) => tour.tourTimeStart.toISOString().substring(0, 10) == selectedDate);
                // }
            }
            setDisplayedTours(toursL);
        }
    }, [selectedDate, selectedCity, selectedCountPassengers])

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    var date = currentDate.toISOString().substring(0, 10);

    return (
        <>
            <Header />
            <div className="toursSearching">
                <h3 className="toursH3">Поиск туров</h3>
                <div>
                    <form className="toursForm" action="" method="post" name="form">
                        <div className="toursDivFields">
                            <div className="toursDivInput toursDivInputFloating">
                                <select className="toursInput" name="list1"
                                    onChange={(event) => { event.target.value == -1 ? setSelectedCity(null) : setSelectedCity(event.target.value) }}>
                                    <option value={-1}>Куда</option>
                                    {cities.map((city) => <option value={city.id}>{city.name}</option>)};
                                </select>
                                <label className="toursLabel" htmlFor="email">Тур</label>
                            </div>
                            <div className="toursDivInput toursDivInputFloating">
                                <input className="toursInput" type="date" min={date} />
                                <label className="toursLabel" htmlFor="email">Дата</label>
                            </div>
                            <div className="toursDivInput toursDivInputFloating">
                                <input className="toursInput" type="number" max={20} min={1} />
                                <label className="toursLabel" htmlFor="email" >Число пассажиров</label>
                            </div>
                        </div>
                    </form>
                    {user ? user.role =='admin' ? 
                    <div>
                        <button className="toursAddTourButton"><Link to={'/addTour'} className="toursAddTourLink"> Добавить тур</Link></button>
                    </div>
                    : '' : ''}
                </div>
            </div>
            <div className="toursMainDiv">
                <h2 className="toursH2">Все маршруты (Результаты поиска)</h2>
                {displayedTours.map((tour) =>
                    <Link to={`/tour/${tour.id}`} className="toursLink">
                        <div className="toursDivPreview">
                            <a className="toursImgA">{tour.tourName}</a>
                            <img className="toursImg" src={tour.imageURL} />
                            <a className="toursImgA">
                                <a className="toursImgA">Даты:</a>
                                <a> С {tour.tourTimeStart.substring(0, 10)} по {tour.tourTimeEnd.substring(0, 10)}</a>
                                <br />
                                <a className="toursImgA">Отправление:</a> <a>В {tour.departureTime} по мск</a><br />
                                <a className="toursImgA">Стоимость:</a> <a>{tour.cost} BYN</a><br />
                            </a>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Tours;
