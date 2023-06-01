import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/user.css'
import {StoreContext}  from '../utils/store';
import React, {useEffect, useState} from "react";

function User() {

    const {userStore} = React.useContext(StoreContext); 
    const [user, setUser] = userStore;

    const[login, setLogin] = useState(user.login); 
    const[password, setPassword] = useState(user.password); 
    const[username, setUsername] = useState(user.name); 
    const[email, setEmail] = useState(user.email);
    
    function componentUpdateUser(event) {
        event.preventDefault()
        console.log(login, password);
        fetch(`http://localhost:5215/api/user/${user.id}/updateUser`,
        {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({login: login, password: password, name: username, email: email})
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

    return (
        <>
            <Header />
            <div className="userMainDiv">
                <form action="" method="post" name="form" className="userForm" onSubmit={componentUpdateUser}>
                    <label className="userLabel">Login</label>
                    <input className="userInput" type="text" placeholder={user.login}
                    value={login} onChange={(e)=>setLogin(e.target.value)}/>
                    <label className="userLabel">Password</label>
                    <input className="userInput" type="text" placeholder={user.password}
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label className="userLabel">Username</label>
                    <input className="userInput" type="text" placeholder={user.name}
                    value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <label className="userLabel">Email</label>
                    <input className="userInput" type="text" placeholder={user.email}
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="userSubmit" type="submit" value="Редактировать"/>
                </form>
                <button className="userBookings" type="button"><Link to='/userBooked' className="userLink">Бронирования</Link></button>
            </div>
        </>
    );
}

export default User;
