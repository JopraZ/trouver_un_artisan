import './cardFicheArtisan.css';

export default function CardFicheArtisan({ artisan }) {
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

      <button>
        Contacter cet artisan
      </button>
    </article>
  );
}
