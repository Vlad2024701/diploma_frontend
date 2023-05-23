import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/tour.css'

function Tour() {

    return (
        <>
            <Header />
            <div className="tourMainDiv">
                <div className="tourDivImage">
                    <img className="tourImage" src='/images/tours/italy.jpg' />
                </div>
                <div className="tourDivInfo">
                    <h2 className="tourH2">Италия</h2>
                    <p className="tourP" align="justify">
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text text text text text
                    </p>
                    <p className="tourP" align="justify">
                        Цена:
                    </p>
                    <p className="tourP" align="justify">
                        Отель: <p className="tourLink" align="justify">тут ссылка будет</p>
                    </p>
                    <button className="tourBookedButton" type="button"><Link to='/booking' className="tourBookedLink">Забронировать</Link></button>
                </div>
            </div>
        </>
    );
}

export default Tour;
