import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardFicheArtisan from "../components/cardFicheArtisan";
export default function Artisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/api/artisans/${id}`)
        .then(res => {
            if (!res.ok) {
            throw new Error("Artisan not found");
            }
            return res.json();
        })
        .then(data => {
            setArtisan(data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!artisan) return <p>Artisan not found</p>;

    return (
        <main className="artisan-page">
        <CardFicheArtisan artisan={artisan} />
        </main>
    );
}
