import './home.css';
import Card from '../components/cardAccueil';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const goToLabbé = () => {
    navigate('/artisan/3');
  };

  const goTo404 = () => {
    navigate('/artisan/undefied');
  };

  return (
    <main>

      <div className="instruction">
        <p>Comment ça marche :</p>
        <ol>
          <li>Choisir la catégorie de l’artisan dans le menu</li>
          <li>Choisir l’artisan</li>
          <li>Le contacter dans le formulaire de contact</li>
          <li>Une réponse sera apportée sous 48h</li>
        </ol>
      </div>

      <div className="card-container">

        <Card
          nom="Orville Salmons"
          note={5.0}
          metier="Chauffagiste"
          ville="Evian"
          onClick={goTo404}
        />

        <Card
          nom="Ernest Carignan"
          note={5.0}
          metier="Ferronier"
          ville="Le Puy-en-Velay"
          onClick={goTo404}
        />

        <Card
          nom="Chocolaterie Labbé"
          note={4.9}
          metier="Chocolatier"
          ville="Lyon"
          onClick={goToLabbé}
        />

      </div>
    </main>
  );
}
