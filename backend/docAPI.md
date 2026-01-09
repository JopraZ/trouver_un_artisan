# 📘 Documentation de l’API — Trouver un artisan

## Présentation

Cette API permet de consulter une liste d’artisans et d’envoyer une demande de contact.
Conformément au cahier des charges, **une seule fiche artisan est accessible** :  
**Chocolaterie Labbé (id = 3)**.

Toutes les routes non définies ou non autorisées retournent une **erreur 404**.

---

## URL de base

http://localhost:3000


---

## Technologies utilisées

- Node.js
- Express
- Sequelize
- MySQL

---

## Règles métier

- Tous les artisans de la catégorie **Alimentation** sont visibles dans la liste
- **Seule la fiche de l’artisan Chocolaterie Labbé est accessible**
- Toute autre tentative d’accès retourne une **404**
- Les demandes de contact sont **uniquement autorisées pour cet artisan**
- Les routes inexistantes retournent une **page 404**

---

## Endpoints

---

### GET — Accueil de l’API

**URL**
/


**Description**  
Vérifie que l’API fonctionne.

**Réponse**
- Status : `200 OK`

API Trouver un artisan


---

### GET — Liste des artisans (Alimentation)

**URL**
/api/artisan/alimentation


**Description**  
Retourne la liste des artisans appartenant à la catégorie *Alimentation*.

**Réponse**
- Status : `200 OK`

```json
[
  {
    "id_artisan": 1,
    "nom": "Boucherie Dumont",
    "categorie": "Alimentation",
    "note": 4.5
  },
  {
    "id_artisan": 3,
    "nom": "Chocolaterie Labbé",
    "categorie": "Alimentation",
    "note": 4.9
  }
]

GET — Fiche artisan autorisée

URL

/api/artisan/3


Description
Retourne la fiche détaillée de l’unique artisan autorisé.

Réponse

Status : 200 OK

{
  "id_artisan": 3,
  "nom": "Chocolaterie Labbé",
  "siteweb": "https://chocolaterie-labbe.fr",
  "categorie": "Alimentation",
  "description": "Lorem ipsum...",
  "email": "chocolaterie-labbe@gmail.com",
  "note": 4.9
}

GET — Fiche artisan non autorisée

URL

/api/artisan/1


Réponse

Status : 404 Not Found

{
  "message": "Page non trouvée"
}

POST — Création d’une demande (autorisé)

URL

/api/demande


Headers

Content-Type: application/json


Body

{
  "email_client": "client@test.com",
  "message": "Je souhaite un devis",
  "id_artisan": 3
}


Réponse

Status : 201 Created

{
  "id_demande": 1,
  "email_client": "client@test.com",
  "message": "Je souhaite un devis",
  "date_demande": "2026-01-09T15:10:00.000Z",
  "id_artisan": 3
}

POST — Demande pour artisan non autorisé

Body

{
  "email_client": "client@test.com",
  "message": "Tentative non autorisée",
  "id_artisan": 1
}


Réponse

Status : 404 Not Found

{
  "message": "Page non trouvée"
}

Gestion des erreurs
Champs manquants

Status : 400 Bad Request

{
  "message": "Tous les champs sont obligatoires"
}

Route inexistante

Status : 404 Not Found

{
  "message": "Page non trouvée"
}