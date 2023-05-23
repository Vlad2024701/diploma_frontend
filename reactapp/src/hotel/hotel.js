import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/hotel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Hotel() {

    return (
        <>
            <Header />
            <div className="hotelMainDiv">
                <div className="hotelInfoDiv">
                    <h2 className="hotelInfoH2">Отель испанка</h2>
                    <img className="hotelInfoImg" src="images/tours/italy.jpg"/>
                </div>
                <Carousel className="hotelCarousel">
                    <div className="hotelDivCarousel">
                        <img className="hotelImgCarousel" src="images/about1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div className="hotelDivCarousel">
                        <img className="hotelImgCarousel" src="images/about2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className="hotelDivCarousel">
                        <img className="hotelImgCarousel" src="images/tour1.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default Hotel;
