import './cardFicheArtisan.css';
import { useNavigate } from 'react-router';

export default function CardFicheArtisan({ artisan }) {
    const navigate = useNavigate();


    return (
        <article className="card-fiche-artisan">
        <h1>{artisan.nom}</h1>

        <p><strong>Métier :</strong> {artisan.metier}</p>
        <p><strong>Ville :</strong> {artisan.ville}</p>
        <p><strong>Note :</strong> {artisan.note}/5</p>

        {artisan.description && (
            <p><strong>À propos :</strong> {artisan.description}</p>
        )}

        {artisan.siteweb && (
            <p>
            <a href={artisan.siteweb} target="_blank" rel="noreferrer">
            Site web
            </a>
            </p>
        )}

        <button onClick={() => navigate(`/artisan/${artisan.id_artisan}/contact`) }>
            Contacter cet artisan
        </button>
        </article>
    );
}
