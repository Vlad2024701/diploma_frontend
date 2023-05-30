import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/userBooked.css'

function UserBooked() {

    return (
        <>
            <Header />
            <div className="userBookedMainDiv">
                <ul className="userBookedUl">
                    <li className="userBookedLi">Id</li>
                    <li className="userBookedLi">Tour</li>
                    <li className="userBookedLi">TimeStart</li>
                    <li className="userBookedLi">TimeEnd</li>
                    <li className="userBookedLi">Hotel</li>
                    <li className="userBookedLi">Places</li>
                </ul>
                <hr/>
                <ul className="userBookedUl">
                    <li className="userBookedLi">Id</li>
                    <li className="userBookedLi">Tour</li>
                    <li className="userBookedLi">TimeStart</li>
                    <li className="userBookedLi">TimeEnd</li>
                    <li className="userBookedLi">Hotel</li>
                    <li className="userBookedLi">Places</li>
                </ul>
                <ul className="userBookedUl">
                    <li className="userBookedLi">Id</li>
                    <li className="userBookedLi">Tour</li>
                    <li className="userBookedLi">TimeStart</li>
                    <li className="userBookedLi">TimeEnd</li>
                    <li className="userBookedLi">Hotel</li>
                    <li className="userBookedLi">Places</li>
                </ul>
            </div>
            <button className="userBookedButton" type="button"><Link to='javascript:history.back()' className="userBookedLink">Назад</Link></button>
        </>
    );
}

export default UserBooked;
