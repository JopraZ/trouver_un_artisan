import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/images/Logo.png';
import './header.css';

export default function Header() {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    if (categories.length === 0) {
        fetch('http://localhost:3000/api/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error(err));
    }


    const handleSearch = (value) => {
        setSearch(value);

        if (value.length < 1) {
        setResults([]);
        return;
        }

        fetch(`http://localhost:3000/api/artisans/search?q=${value}`)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.error(err));
    };

    const handleClick = (artisan) => {
        if (artisan.nom === 'Chocolaterie Labbé') {
        navigate(`/artisan/${artisan.id_artisan}`);
        } else {
        navigate('/404');
        }
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

            {results.length > 0 && (
                <ul className="search-results">
                {results.map(artisan => (
                    <li
                    key={artisan.id_artisan}
                    onClick={() => handleClick(artisan)}
                    >
                    {artisan.nom}
                    </li>
                ))}
                </ul>
            )}
            </div>
        </div>

        <nav className="nav">
            {categories.map(category => (
            <Link
                key={category.id}
                to={`/${category.nom.toLowerCase()}`}
            >
                {category.nom}
            </Link>
            ))}
        </nav>
        </header>
    );
}
