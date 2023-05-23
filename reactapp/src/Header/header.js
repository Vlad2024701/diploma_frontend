import { Link } from 'react-router-dom';
import '../css/header.css'

function Header() {
    return (
        <>
            <div className="headerMain">
                <div className="headerMainMenuDiv">
                    <div className="headerLogoDiv">
                        <a className="headerLogoA"><Link to='/main' className='headerLogoLink'>Туристические автобусы</Link></a>
                    </div>
                    <div className="headerMenuDiv">
                        <ul>
                            <li className="headerMenuLi"><Link to='/tours' className="headerAuth">Туры</Link></li>
                            <li className="headerMenuLi"><Link to='/about' className="headerAuth">О нас</Link></li>
                            <li className="headerMenuLi"><Link to='/countries' className="headerAuth">Страны</Link></li>
                            <li className="headerMenuLi"><Link to='/hotels' className="headerAuth">Отели</Link></li>
                            <li className="headerMenuLi"><Link to='/user' className="headerAuth">Личный кабинет</Link></li>
                            <li className="headerMenuLi"><Link to='/register' className="headerAuth">Войти</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
