import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>

            <nav className="legal-text">
                <Link to='/mentionsLegales'>Mentions légales</Link>
                <Link to='/donneesPersonnelles'>Données personnelles</Link>
                <Link to='/accessibilité'>Accessibilité</Link>
                <Link to='/cookies'>Cookies</Link>
            </nav>

            <div className="contact">
                <p>Contact:</p>
                <a href="https://www.google.com/maps/place/H%C3%B4tel+de+R%C3%A9gion+-+R%C3%A9gion+Auvergne-Rh%C3%B4ne-Alpes/@45.7406643,4.8169138,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4ecfb42ffac87:0xafa288732ed9370c!8m2!3d45.7406606!4d4.8194887!16s%2Fg%2F1tdq5bzj?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                   target='_blank'>
                    101 cours Charlemagne <br />
                    CS 20033 <br />
                    69269 LYON CEDEX 02 <br />
                    France <br />
                </a>
                <a href="tel:++33 (0)4 26 73 40 00">+33 (0)4 26 73 40 00</a>
            </div>

        </footer>
    );
};