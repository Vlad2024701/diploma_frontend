import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/booking.css'

function addHotel() {
    return (
        <>
            <Header />
            <div className="bookingMainDiv">
                <form action="" method="post" name="form" className="bookingForm">
                    <label className="bookingLabel">Почта</label>
                    <input className="bookingInput" type="text" placeholder="xxx@mail.ru"/>
                    <label className="bookingLabel">Количество пассажиров</label>
                    <input className="bookingInput" type="number" max={20} min={1}  placeholder="1"/>
                    <label className="bookingLabel">Дата отправки</label>
                    <input className="bookingInput" type="text" placeholder="date" disabled='true'/>
                    <label className="bookingLabel">Дата прибытия</label>
                    <input className="bookingInput" type="text" placeholder="date" disabled='true'/>
                    <label className="bookingLabel">Тур</label>
                    <input className="bookingInput" type="text" placeholder="Italy" disabled='true'/>
                    <label className="bookingLabel">Отели</label>
                    <input className="bookingInput" type="text" placeholder="Hotels" disabled='true'/>
                    <label className="bookingLabel">Стоимость</label>
                    <input className="bookingInput" type="text" placeholder="1000$" disabled='true'/>
                    <button className="bookingSubmit" type="button">
                        <Link to='/userBooked' className="bookingLink">Забронировать</Link>
                    </button>
                    <button className="bookingBack" type="button">
                        <Link to='/userBooked' className="bookingLink">Назад</Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default addHotel;
