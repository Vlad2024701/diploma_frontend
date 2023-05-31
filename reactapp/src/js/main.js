import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/main.css'
import React, { useEffect, useState } from "react";

function Main() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5215/api/tour/getTours')
            .then(response => response.json())
            .then(tours => {
                setTours(tours);
            });
    }, [])

    if (!tours) return (
        <>
            <Header />
            <div>No data</div>
        </>
    )


    return (
        <>
            <Header />
            <div className="mainSearching">
                <h3 className="mainH3">Ассалам алейкум брат наша компания топ выбирай любые поездки и будешь счастлив брат. Для более подробной информации
                переходи на вкладки туров брат, там есть всё шо захочешь брат. Хочешь узнать инфу про нас тыкай вкладку о нас брат. А ниже ты можешь поглазеть на 
                самые пиздатые маршруты на последнее время брат</h3>
            </div>
            <hr />
            <div className="mainDivPopular">
                <h2 className="mainH2">Популярные маршруты</h2>
                {/* <Link to='/tour' className="mainLink">
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
                </div> */}
                {tours.map((tour) =>
                    <Link to={`/tour/${tour.id}`} className="toursLink">
                        <div className="toursDivPreview">
                            <a className="toursImgA">{tour.tourName}</a>
                            <img className="toursImg" src='/images/tour1.jpg' />
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Main;
