
export default function CardArtisan ({
    nom,
    note,
    metier,
    ville,
    onClick
    }) {

    const renderStars = () => {
        const fullStars = Math.round(note);
        return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
    };

    return (
        <article
        className={`
            card 
            h-100 
            text-white 
            text-center 
            p-4 
            rounded-3 
            bg-artisan
            ${onClick ? 'card-clickable' : ''}
        `}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        >
        <div className="card-body d-flex flex-column align-items-center">

            <h3 className="card-title h5 mb-3">{nom}</h3>

            <div className="mb-3 d-flex flex-column align-items-center">
            <span className="text-warning fs-4 mb-1">
                {renderStars()}
            </span>
            <span className="badge text-white mb-1">
                {note}
            </span>
            </div>

            <p className="fs-5 fw-semibold mb-1">
            {metier}
            </p>

            <p className="fs-6 text-white mb-1">
            {ville}
            </p>

        </div>
        </article>
    );
}
