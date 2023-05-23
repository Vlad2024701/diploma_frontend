import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/user.css'

function User() {
    return (
        <>
            <Header />
            <div className="userMainDiv">
                <form action="" method="post" name="form" className="userForm">
                    <label className="userLabel">Username</label>
                    <input className="userInput" type="text" placeholder="username"/>
                    <label className="userLabel">Password</label>
                    <input className="userInput" type="password" placeholder="password"/>
                    <label className="userLabel">Email</label>
                    <input className="userInput" type="text" placeholder="xxx@mail.ru"/>
                    <input className="userSubmit" type="submit" value="Редактировать"/>
                </form>
                <button className="userBookings" type="button"><Link to='/userBooked' className="userLink">Бронирования</Link></button>
            </div>
        </>
    );
}

export default User;
