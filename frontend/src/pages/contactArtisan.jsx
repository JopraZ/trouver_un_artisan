import { useParams } from "react-router-dom";
import { useState } from "react";
import './contactArtisan.css';

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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        id_artisan: id
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Erreur lors de l'envoi du message");
        }
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
      .catch((error) => {
        console.error(error);
        alert("Erreur lors de l'envoi du message");
      });
  };

  return (
    <main className="contact-page">
      <h1>Contactez l'artisan</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={form.nom}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="objet"
          placeholder="Objet"
          value={form.objet}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}
