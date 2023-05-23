import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/countries.css'

function Countries() {

    return (
        <>
            <Header />
            <div className="countriesMainDiv">
                <ul className="countriesUl">
                    <li className="countriesLi">Страна</li>
                    <li className="countriesLi">Города</li>
                </ul>
                <hr />
                <ul className="countriesUl">
                    <li className="countriesLi">
                        <select className="countriesSelect">
                            <option>Швеция</option>
                            <option>Германия</option>
                            <option>Дания</option>
                            <option>Азербайджан</option>
                        </select>
                    </li>
                    <li className="countriesLi">
                        <select className="countriesSelect">
                            <option>Минск</option>
                            <option>Брест</option>
                            <option>Вильнюс</option>
                            <option>Женя</option>
                        </select>
                    </li>
                </ul>
            <button className="countriesButton" type="button"><Link to='/user' className="countriesLink">Назад</Link></button>
            </div>
        </>
    );
}

export default Countries;
