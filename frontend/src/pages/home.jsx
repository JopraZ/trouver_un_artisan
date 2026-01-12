import './home.css'
import Card from '../components/cardAccueil'

export default function Home() {
    return (

        <main>
            <div className="instruction">
                <p>Comment ça marche :</p>
                <ol>
                    <li>Choisir la catégorie de l’artisan dans le menu</li>
                    <li>Choisir l’artisan</li>
                    <li>Le contacter dans le formulaire de contact</li>
                    <li>Une réponse sera apporter sous 48h</li>
                </ol>
            </div>

            <div className="card-container">

                <Card 
                id = {6}
                nom = 'Orville Salmons'
                note = {5.0}
                metier = 'Chauffagiste'
                ville = 'Evian'
                />

                <Card 
                id = {12}
                nom = 'Ernest Carignan'
                note = {5.0}
                metier = 'Ferronier'
                ville = 'Le Puy-en-Velay'
                />

                <Card 
                id = {3}
                nom = 'Chocolaterie Labbé'
                note = {4.9}
                metier = 'Chocolatier'
                ville = 'Lyon'
                />
            </div>
        </main>

    )
}