import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/tours.css'

function Tours() {
    return (
        <>
            <Header />
            <div className="toursSearching">    
                <h3 className="toursH3">Поиск туров</h3>
                <div>
                    <form className="toursForm" action="" method="post" name="form">
                        <div className="toursDivFields">
                            <div className="toursDivInput toursDivInputFloating">
                                <select className="toursInput" name="list1">
                                    <option>Куда</option>
                                    <option>Финляндия</option>
                                    <option>Швеция</option>
                                    <option>Америка</option>
                                </select>
                                <label className="toursLabel" htmlFor="email">Тур</label>
                            </div>
                            <div className="toursDivInput toursDivInputFloating">
                                <input className="toursInput" type="date" />
                                <label className="toursLabel" htmlFor="email">Дата</label>
                            </div>
                            <div className="toursDivInput toursDivInputFloating">
                                <input className="toursInput" type="number" max={20} min={1} />
                                <label className="toursLabel" htmlFor="email" >Число пассажиров</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="toursMainDiv">
                <h2 className="toursH2">Все маршруты (Результаты поиска)</h2>
                <Link to='/tour' className="toursLink">
                    <div className="toursDivPreview">
                        <a className="toursImgA">Тур в италию</a>
                        <img className="toursImg" src='/images/tour1.jpg' />
                        <a className="toursImgA">
                            <a className="toursImgA">Даты:</a> <a>С 12:06:2023 по 16:06:2023</a><br />
                            <a className="toursImgA">Отправление:</a> <a>В 14:30 по мск</a><br />
                            <a className="toursImgA">Стоимость:</a> <a>1000 BYN</a><br />
                        </a>
                    </div>
                </Link>
                <div className="toursDivPreview">
                    <a className="toursImgA">Тур в италию</a>
                    <img className="toursImg" src='/images/tour1.jpg' />
                    <a className="toursImgA">
                        <a className="toursImgA">Даты:</a> <a>С 12:06:2023 по 16:06:2023</a><br />
                        <a className="toursImgA">Отправление:</a> <a>В 14:30 по мск</a><br />
                        <a className="toursImgA">Стоимость:</a> <a>1000 BYN</a><br />
                    </a>
                </div>
                <div className="toursDivPreview">
                    <a className="toursImgA">Тур в италию</a>
                    <img className="toursImg" src='/images/tour1.jpg' />
                    <a className="toursImgA">
                        <a className="toursImgA">Даты:</a> <a>С 12:06:2023 по 16:06:2023</a><br />
                        <a className="toursImgA">Отправление:</a> <a>В 14:30 по мск</a><br />
                        <a className="toursImgA">Стоимость:</a> <a>1000 BYN</a><br />
                    </a>
                </div>
                <div className="toursDivPreview">
                    <a className="toursImgA">Тур в италию</a>
                    <img className="toursImg" src='/images/tour1.jpg' />
                    <a className="toursImgA">
                        <a className="toursImgA">Даты:</a> <a>С 12:06:2023 по 16:06:2023</a><br />
                        <a className="toursImgA">Отправление:</a> <a>В 14:30 по мск</a><br />
                        <a className="toursImgA">Стоимость:</a> <a>1000 BYN</a><br />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Tours;
