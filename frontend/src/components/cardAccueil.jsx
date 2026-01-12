import './cardAccueil.css';
import { Link } from 'react-router-dom'

export default function  Card({ id, nom, note, metier, ville }) {

    const renderStars = () => {
        const fullStars = Math.round(note);

        return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
    }

    return (
        <Link to ={`/artisans/${id}`} className='card-link'>
            <article className='card'>
                <h3 className="card-title">{nom}</h3>

                <div className="card-rating">
                    <span className="stars">{renderStars()}</span>
                    <span className="note">{note}</span>
                </div>

                <p className="metier">{metier}</p>
                <p className="ville">{ville}</p>
            </article>
        </Link>
    );
}