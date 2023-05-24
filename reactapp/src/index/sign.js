import '../css/index.css';
import { Link } from 'react-router-dom';
import Header from '../Header/header'
import React, {useEffect, useState} from "react";


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

    //trying to get data from controllers
    const [message, getMessage] = useState("");
    useEffect(() => {
        fetch('http://localhost:5215/api/user/test')
        .then(response => response.text())
        .then(message => {
            getMessage(message);
        });
    }, [])

    //func
    function componentGetUser() {
        fetch('http://localhost:5215/api/user/test')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        });
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
                        <form className="fsi form-signin" action="" method="post" name="form">
                            <label className='indexLabel'>Username</label>
                            <input className="form-styling" type="text" name="username" placeholder="" />
                            <label className='indexLabel'>Password</label>
                            <input className="form-styling" type="password" name="password" placeholder="" />
                            <div>
                                <input className="btn-signin" type="submit" value="Sign in" />
                            </div>
                        </form>

                        <form className="fsu form-signup-left" action="" method="post" name="form">
                            <label className='indexLabel'>Full name</label>
                            <input className="form-styling" type="text" name="fullname" placeholder="" />
                            <label className='indexLabel'>Email</label>
                            <input className="form-styling" type="text" name="email" placeholder="" />
                            <label className='indexLabel'>Password</label>
                            <input className="form-styling" type="password" name="password" placeholder="" />
                            <label className='indexLabel'>Confirm password</label>
                            <input className="form-styling" type="password" name="confirmpassword" placeholder="" />
                            <a className="btn-signup">Sign Up</a>
                        </form>

                        <div className="success">
                            <div className="successtext">
                                <p> Thanks for signing up! Check your email for confirmation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/userBooked'>Бронирования</Link>
                <h2 className='some' >{message}</h2>
                <button className='someButton' onClick={componentGetUser}>hlafdasdas </button>
            </div>
        </>
    );
}

export default Sign;
