import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/hotels.css'

function Hotels() {

    return (
        <>
            <Header />
            <div className="hotelsMainDiv">
                <Link to='/hotel' className="hotelsLink">
                    <div className="hotelsDivPreview">
                        <a className="hotelsImgA">Отель испанка</a>
                        <img className="hotelsImg" src='/images/tour1.jpg' />
                        <a className="hotelsImgA">
                            <a className="hotelsImgA">Город:</a> <a>Минск</a><br />
                        </a>
                    </div>
                </Link>
                <div className="hotelsDivPreview">
                    <a className="hotelsImgA">Отель испанка</a>
                    <img className="hotelsImg" src='/images/tour1.jpg' />
                    <a className="hotelsImgA">
                        <a className="hotelsImgA">Город:</a> <a>Минск</a><br />
                    </a>
                </div>
                <div className="hotelsDivPreview">
                    <a className="hotelsImgA">Отель испанка</a>
                    <img className="hotelsImg" src='/images/tour1.jpg' />
                    <a className="hotelsImgA">
                        <a className="hotelsImgA">Город:</a> <a>Минск</a><br />
                    </a>
                </div>
                <div className="hotelsDivPreview">
                    <a className="hotelsImgA">Отель испанка</a>

                    <img className="hotelsImg" src='/images/tour1.jpg' />
                    <a className="hotelsImgA">
                        <a className="hotelsImgA">Город:</a> <a>Минск</a><br />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hotels;
