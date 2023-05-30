import '../css/index.css';
import { Link, json } from 'react-router-dom';
import Header from '../Header/header'
import React, {useEffect, useState} from "react";
import { event } from 'jquery';
import {StoreContext}  from '../utils/store';


function Sign() {

    const [signin_active, setSignInItem] = useState(`signin_active`)
    const [signup_inactive, setSignUpItem] = useState(`signup_inactive`)

    function changeSignIn(){
        setSignInItem(prevCount =>{
            if (prevCount === `signin_active`) {
                return 'signin_active';
            } else if (prevCount === `signin_inactive`) {
                setSignUpItem(`signup_inactive`);
                let formSignUp = document.querySelector('.fsu');
                formSignUp.classList.remove('form-signup');
                formSignUp.classList.add('form-signup-left');
                let formSignIn = document.querySelector('.fsi');
                formSignIn.classList.remove('form-signin-left');
                formSignIn.classList.add('form-signin');
                return 'signin_active';
            }
        })
    };

    function changeSignUp(){
        setSignUpItem(prevCount =>{
            if (prevCount === `signup_active`) {
                return 'signup_active';
            } else if (prevCount === `signup_inactive`) {
                setSignInItem(`signin_inactive`);
                let formSignIn = document.querySelector('.fsi');
                formSignIn.classList.remove('form-signin');
                formSignIn.classList.add('form-signin-left');
                let formSignUp = document.querySelector('.fsu');
                formSignUp.classList.remove('form-signup-left');
                formSignUp.classList.add('form-signup');
                return 'signup_active';
            }
        })
    };


    //components

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/user/getUsers')
        .then(response => response.json())
        .then(items => {
            setItems(items);
        });
    }, [])


    function componentGetUser() {
        fetch('http://localhost:5215/api/user/test')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        });
    }

    const[login, setLogin] = useState(""); 
    const[password, setPassword] = useState("");
    const {userStore} = React.useContext(StoreContext); 

    function componentAuthorize(event) {
        event.preventDefault()
        console.log(login, password);
        fetch('http://localhost:5215/api/user/authorize',
        {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({login: login, password: password})
        })
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Неверный логин или пароль');
        })
        .then(gotUser => {
            console.log(gotUser);
            alert(`Здравствуйте, ${login}`);
            userStore[1](JSON.parse(gotUser));
        })
        .catch((error) => {
            alert(error.message);
        });
    }


    
    const[loginRegister, setLoginRegister] = useState(""); 
    const[passwordRegister, setPasswordRegister] = useState("");
    
    const[nameRegister, setNameRegister] = useState(""); 
    const[emailRegister, setEmailRegister] = useState("");
    const[roleRegister, setRoleRegister] = useState("");
    function componentRegister(event) {
        event.preventDefault();
        setRoleRegister("user");
        console.log(login, password, passwordRegister, nameRegister, emailRegister);

        fetch('http://localhost:5215/api/user/register',
        {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({login: loginRegister, password: passwordRegister, name: nameRegister, email: emailRegister, role: roleRegister})
        })
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Неверные данные для регистрации (бэк)');
        })
        .then(goteUserRegister => {
            console.log(goteUserRegister);
            alert(`Вы зарегестрировались!`);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    function componentSignOut(){
        userStore[1](-1);
        alert(`Вы вышли из аккаунта`);
    }


    return (
        <>
        <Header />
            <div className="container">
                <div className="frame">
                    <div className="nav">
                        <ul className="links">
                            <li className={`${signin_active}`} onClick={changeSignIn}><a className="btn-signin-active">Sign in</a></li>
                            <li className={`${signup_inactive}`} onClick={changeSignUp}><a className="btn-signup-active">Sign up </a></li>
                        </ul>
                    </div>
                    <div>
                        <form className="fsi form-signin" action="" method="post" name="form" onSubmit={componentAuthorize}>
                            <label className='indexLabel'>Username</label>
                            <input className="form-styling" type="text" name="login" placeholder=""
                            value={login} onChange={(e)=>setLogin(e.target.value)}/>
                            <label className='indexLabel'>Password</label>
                            <input className="form-styling" type="password" name="password" placeholder=""
                            value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <div>
                                <input className="btn-signin" type="submit" value="Sign in"/>
                            </div>
                            <div>
                                <input className="btn-signout" type="button" value="Sign out" onClick={componentSignOut}/>
                            </div>
                        </form>

                        <form className="fsu form-signup-left" action="" method="post" name="form" onSubmit={componentRegister}>
                            <label className='indexLabel'>Full name</label>
                            <input className="form-styling" type="text" name="fullname" placeholder="" 
                            value={nameRegister} onChange={(e)=>setNameRegister(e.target.value)} />
                            <label className='indexLabel'>Login</label>
                            <input className="form-styling" type="text" name="loginRegister" placeholder="" 
                            value={loginRegister} onChange={(e)=>setLoginRegister(e.target.value)} />
                            <label className='indexLabel'>Email</label>
                            <input className="form-styling" type="text" name="email" placeholder="" 
                            value={emailRegister} onChange={(e)=>setEmailRegister(e.target.value)} />
                            <label className='indexLabel'>Password</label>
                            <input className="form-styling" type="password" name="password" placeholder=""
                            value={passwordRegister} onChange={(e)=>setPasswordRegister(e.target.value)} />
                            <input className="btn-signup" type="submit" value="Sign up"/>
                        </form>

                        <div className="success">
                            <div className="successtext">
                                <p> Thanks for signing up! Check your email for confirmation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign;
