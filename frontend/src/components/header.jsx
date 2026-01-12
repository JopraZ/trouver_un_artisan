import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import './header.css';

export default function Header() {
    return (
        <header className='header'>

            <div className="header-left">

                <div className="logo">
                    <img src={logo} alt="Trouver un artisan"/>
                </div>

                <div className="search">
                    <input type="text" placeholder='' />
                </div>
            </div>

            <nav className="nav">
                <Link to='/batiment'>Bâtiment</Link>
                <Link to='/service'>Service</Link>
                <Link to='/fabrication'>Fabrication</Link>
                <Link to='/alimentation'>Alimentation</Link>
            </nav>

        </header>
    );
};