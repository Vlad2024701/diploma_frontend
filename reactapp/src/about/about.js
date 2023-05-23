import Header from "../Header/header";
import { Link } from 'react-router-dom';
import '../css/about.css'

function About() {

    return (
        <>
            <Header />
            <div className="aboutMainDiv">
                <h2 className="aboutH2">О нас</h2>
                <img className="aboutImage" src='/images/about1.jpg' />
                <h3 className="aboutH3">
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                </h3>
                <ul class="social-icons">
                    <li><a class="social-icon-twitter" href="https://twitter.com/" title="twitter" target="_blank" rel="noopener"></a></li>
                    <li><a class="social-icon-fb" href="https://www.facebook.com/" title="facebook" target="_blank" rel="noopener"></a></li>
                    <li><a class="social-icon-vk" href="https://vk.com/" title="vk" target="_blank" rel="noopener"></a></li>
                    <li><a class="social-icon-telegram" href="https://web.telegram.org/" title="telegram" target="_blank" rel="noopener"></a></li>
                    <li><a class="social-icon-instagram" href="https://www.instagram.com/" title="instagram" target="_blank" rel="noopener"></a></li>
                </ul>
            </div>
        </>
    );
}

export default About;
