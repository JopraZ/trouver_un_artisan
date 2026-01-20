import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from '../assets/images/Logo.png';
import './header.css';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/api/categories')
        .then(res => res.json())
        .then(setCategories)
        .catch(console.error);
    }, []);

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

  const handleResultClick = (artisan) => {
        setSearch('');
        setResults([]);
        setMenuOpen(false);
        navigate(`/artisan/${artisan.id_artisan}`);
    };

  return (
        <header className="header d-flex align-items-center justify-content-between">

        <div className="header-left d-flex align-items-center flex-grow-1">

            <Link
            to="/"
            className="logo d-inline-flex align-items-center"
            onClick={() => setMenuOpen(false)}
            >
            <img src={logo} alt="Trouver un artisan" />
            </Link>

            <div className="search">
            <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Rechercher un artisan..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />

            {!!results.length && (
                <ul className="search-results">
                {results.map(a => (
                    <li
                    key={a.id_artisan}
                    onClick={() => handleResultClick(a)}
                    >
                    {a.nom}
                    </li>
                ))}
                </ul>
            )}
            </div>
        </div>

        <button
            className="burger d-lg-none"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            >
            ☰
        </button>

        <nav
            className={`nav ${menuOpen ? 'open' : ''}`}
            role="navigation"
        >
            {categories.map(c => (
            <Link
                key={c.id}
                to={`/${c.nom.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
            >
                {c.nom}
            </Link>
            ))}
        </nav>

        </header>
    );
}
