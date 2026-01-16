import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CardArtisan from '../components/cardArtisan';
import './alimentation.css';

export default function Alimentation() {
  const [artisans, setArtisans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/artisans?categorie=Alimentation')
      .then(res => res.json())
      .then(setArtisans)
      .catch(console.error);
  }, []);

  const handleClick = (artisan) => {
  navigate(`/artisan/${artisan.id_artisan}`);
};

console.log(artisans);

 return (
  <main className="alimentation">


    <div className="artisan-grid">
      {artisans.map((artisan) => (
        <CardArtisan
          key={artisan.id_artisan}
          nom={artisan.nom}
          note={artisan.note}
          metier={artisan.metier}
          ville={artisan.ville}
          onClick={() => handleClick(artisan)}
        />
      ))}
    </div>
  </main>
);

}
