import { useParams } from "react-router-dom";
import { useState } from "react";
import "./contactArtisan.css";

export default function ContactArtisan() {
    const { id } = useParams();

    const [form, setFormData] = useState({
        nom: "",
        email: "",
        objet: "",
        message: ""
    });

  const handleChange = (e) => {
    setFormData({
        ...form,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/demande", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...form,
            id_artisan: id
        })
    })
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(() => {
            alert("Message envoyé avec succès !");
            setFormData({
            nom: "",
            email: "",
            objet: "",
            message: ""
            });
        })
        .catch(() => {
            alert("Erreur lors de l'envoi du message");
        });
  };

  return (
        <main className="contact-page">

            <h1>Contactez l’artisan</h1>

            {/* Formulaire LARGE, pas en colonne */}
            <form
                onSubmit={handleSubmit}
                className="contact-form card border-0 shadow-lg"
            >
            <div className="card-body p-4">

                <input
                    type="text"
                    name="nom"
                    className="form-control mb-3"
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Votre email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="objet"
                    className="form-control mb-3"
                    placeholder="Objet"
                    value={form.objet}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    className="form-control mb-4"
                    placeholder="Votre message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    required
                />

                <div className="text-center">
                    <button type="submit" className="btn btn-success fw-bold px-4 py-2">
                    Envoyer
                    </button>
                </div>

            </div>
        </form>

    </main>
  );
}
