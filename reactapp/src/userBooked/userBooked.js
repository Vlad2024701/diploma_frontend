import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/userBooked.css'
import { StoreContext } from '../utils/store';
import React, { useEffect, useState } from "react";

function UserBooked() {

    const { userStore } = React.useContext(StoreContext);
    const [user, setUser] = userStore;

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:5215/api/ticket/${user.id}/GetTicketsByUserId`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Неверные данные');
            })
            .then(gotTickets => {
                console.log(gotTickets);
                setTickets(gotTickets);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    if (!tickets) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )

    return (
        <>
            <Header />
            <div className="userBookedMainDiv">
                <ul className="userBookedUl">
                    <li className="userBookedLiId">ID</li>
                    <li className="userBookedLiTN">Тур</li>
                    <li className="userBookedLiTS">Дата отправки</li>
                    <li className="userBookedLiTE">Дата прибытия</li>
                    <li className="userBookedLiP">Занятые места</li>
                </ul>
                <hr />
                {tickets.map((ticket) =>
                    <ul className="userBookedUl">
                        <li className="userBookedLiId">{ticket.id}</li>
                        <li className="userBookedLiTN">{ticket.tourName}</li>
                        <li className="userBookedLiTS">{ticket.tourTimeStart.substring(0, 10)}</li>
                        <li className="userBookedLiTE">{ticket.tourTimeEnd.substring(0, 10)}</li>
                        <li className="userBookedLiP">{ticket.placeNumbers.map((place)=> place + ` `)}</li>
                    </ul>
                )}
            </div>
            <button className="userBookedButton" type="button"><Link to='javascript:history.back()' className="userBookedLink">Назад</Link></button>
        </>
    );
}

export default UserBooked;
