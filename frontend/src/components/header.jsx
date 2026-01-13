import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/images/Logo.png';
import './header.css';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  // chargement catégories (simple)
  if (!categories.length) {
    fetch('http://localhost:3000/api/categories')
      .then(res => res.json())
      .then(setCategories)
      .catch(console.error);
  }

  // recherche
  const handleSearch = async (value) => {
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/artisans/search?q=${value}`
      );
      setResults(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  // clic résultat
  const handleResultClick = (artisan) => {
    setSearch('');
    setResults([]);

    navigate(
      artisan.nom === 'Chocolaterie Labbé'
        ? '/artisan/chocolaterie-labbe'
        : '/artisan-inexistant'
    );
  };

  return (
    <header className="header">
      <div className="header-left">

        <Link to="/" className="logo">
          <img src={logo} alt="Trouver un artisan" />
        </Link>

        <div className="search">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {!!results.length && (
            <ul className="search-results">
              {results.map(a => (
                <li key={a.id_artisan} onClick={() => handleResultClick(a)}>
                  {a.nom}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

      <nav className="nav">
        {categories.map(c => (
          <Link key={c.id} to={`/${c.nom.toLowerCase()}`}>
            {c.nom}
          </Link>
        ))}
      </nav>
    </header>
  );
}
