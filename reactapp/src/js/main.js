import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/main.css'

function Main() {
    return (
        <>
            <Header />
            <div className="mainSearching">
                <h3 className="mainH3">Билеты на автобус</h3>
                <div>
                    <form className="mainForm" action="" method="post" name="form">
                        <div className="mainDivFields">
                            <div className="mainDivInput mainDivInputFloating">
                                <select className="mainInput" name="list1">
                                    <option>Куда</option>
                                    <option>Финляндия</option>
                                    <option>Швеция</option>
                                    <option>Америка</option>
                                </select>
                                <label className="mainLabel" htmlFor="email">Тур</label>
                            </div>
                            <div className="mainDivInput mainDivInputFloating">
                                <input className="mainInput" type="date" />
                                <label className="mainLabel" htmlFor="email">Дата</label>
                            </div>
                            <div className="mainDivInput mainDivInputFloating">
                                <input className="mainInput" type="number" max={20} min={1} />
                                <label className="mainLabel" htmlFor="email" >Число пассажиров</label>
                            </div>
                        </div>
                        <div className="mainDivSubmit">
                            <input className="mainSubmit" type="submit" value="Найти билеты" />
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <div className="mainDivPopular">
                <h2 className="mainH2">Популярные маршруты</h2>
                <Link to='/tour' className="mainLink">
                    <div className="mainDivPreview">
                        <img className="mainImg" src='/images/tour1.jpg' />
                        <a className="mainImgA">Тур в италию</a>
                    </div>
                </Link>
                <div className="mainDivPreview">
                    <img className="mainImg" src='/images/tour1.jpg' />
                    <a className="mainImgA">Тур в италию</a>
                </div>
                <div className="mainDivPreview">
                    <img className="mainImg" src='/images/tour1.jpg' />
                    <a className="mainImgA">Тур в италию</a>
                </div>
                <div className="mainDivPreview">
                    <img className="mainImg" src='/images/tour1.jpg' />
                    <a className="mainImgA">Тур в италию</a>
                </div>
            </div>
        </>
    );
}

export default Main;
