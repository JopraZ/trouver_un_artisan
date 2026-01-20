import './cardAccueil.css'

export default function Card({ nom, note, metier, ville, onClick }) {

    const renderStars = () => {
        const fullStars = Math.round(note);
        return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
    };

    return (
        <article
        className={`card h-100 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        >
            <div className="card-body d-flex flex-column align-items-center">

                <h3 className="card-title h5">{nom}</h3>

                <div className="mb-2">
                <span className="text-warning me-2">{renderStars()}</span>
                <span className="badge">{note}</span>
                </div>

                <p className="card-text fs-5 text-white mb-1">{metier}</p>
                <p className="card-text fs-5 text-white mb-0">{ville}</p>

            </div>
        </article>

    );
}
