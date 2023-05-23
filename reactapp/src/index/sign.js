import '../css/index.css';
import { Link } from 'react-router-dom';
import Header from '../Header/header'

function Sign() {
    function kok() {
        var btnSI = document.querySelector('.btn-signin-active');
        var btnSU = document.querySelector('.btn-signup-active')
        btnSI.addEventListener("click", changeSignIn);
        btnSU.addEventListener("click", changeSignUp);

        function changeSignIn() {
            let signIn = document.querySelector('.signin');
            let signUp = document.querySelector('.signup');

            let formSignIn = document.querySelector('.fsi');
            formSignIn.classList.remove('form-signin-left');
            formSignIn.classList.add('form-signin');

            let formSignUp = document.querySelector('.fsu');
            formSignUp.classList.remove('form-signup');
            formSignUp.classList.add('form-signup-left');

            if (signIn.classList[1] === 'signin-inactive') {
                signIn.classList.remove('signin-inactive');
                signIn.classList.add('signin-active');
                signUp.classList.remove('signup-active');
                signUp.classList.add('signup-inactive');
            }
        }

        function changeSignUp() {
            let signIn = document.querySelector('.signin');
            let signUp = document.querySelector('.signup');

            let formSignIn = document.querySelector('.fsi');
            formSignIn.classList.remove('form-signin');
            formSignIn.classList.add('form-signin-left');

            let formSignUp = document.querySelector('.fsu');
            formSignUp.classList.remove('form-signup-left');
            formSignUp.classList.add('form-signup');

            if (signUp.classList[1] === 'signup-inactive') {
                signIn.classList.remove('signin-active');
                signIn.classList.add('signin-inactive');
                signUp.classList.remove('signup-inactive');
                signUp.classList.add('signup-active');
            }
        }
    }

    return (
        <>
        <Header />
            <div className="container">
                <div className="frame">
                    <div className="nav">
                        <ul className="links">
                            <li className="signin signin-active"><a onClick={kok} className="btn-signin-active">Sign in</a></li>
                            <li className="signup signup-inactive"><a onClick={kok} className="btn-signup-active">Sign up </a></li>
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
            </div>
        </>
    );
}

export default Sign;
