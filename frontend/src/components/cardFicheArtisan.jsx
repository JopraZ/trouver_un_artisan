import './cardFicheArtisan.css';
import { useNavigate } from 'react-router';

export default function CardFicheArtisan({ artisan }) {
    const navigate = useNavigate();

    return (
        <div className="container-xl my-5">
        <article className="card bg-artisan text-white rounded-4 shadow-lg position-relative w-100 mx-auto">
            <div className="card-body p-5 pb-6">

            <h1 className="text-center display-4 fw-bold mb-5">
                {artisan.nom}
            </h1>

            <div className="fs-3 fw-semibold">
                <p>{artisan.metier}</p>
                <p>{artisan.ville}</p>
                <p><strong>Note :</strong> {artisan.note}/5</p>

                {artisan.description && (
                <p className="mt-4">
                    À propos : {artisan.description}
                </p>
                )}

                {artisan.siteweb && (
                <p className="mt-3">
                    <a
                    href={artisan.siteweb}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-underline"
                    >
                    Site web
                    </a>
                </p>
                )}
            </div>

            <div className="position-absolute bottom-0 end-0 m-4">
                <button
                className="btn btn-danger btn-lg fw-bold rounded-3"
                onClick={() =>
                    navigate(`/artisan/${artisan.id_artisan}/contact`)
                }
                >
                Contacter cet artisan
                </button>
            </div>

            </div>
        </article>
        </div>
    );
}
