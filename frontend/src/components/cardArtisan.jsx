import './cardArtisan.css'

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
      className={`card ${onClick ? 'card-clickable' : ''}`}
      onClick={onClick}
    >
      <h3 className="card-title">{nom}</h3>

      <div className="card-rating">
        <span className="stars">{renderStars()}</span>
        <span className="note">{note}</span>
      </div>

      <p className="metier">{metier}</p>
      <p className="ville">{ville}</p>
    </article>
  );
};