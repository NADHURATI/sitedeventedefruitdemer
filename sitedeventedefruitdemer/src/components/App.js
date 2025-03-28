import logo from '../logo.svg';  // Importation du logo de l'application, ici un fichier SVG situé dans le dossier parent (../).
import '../styles/app.css';  // Importation du fichier CSS qui contient les styles globaux pour l'application.
import Homepage from './Accueil';  // Importation du composant "Homepage" (page d'accueil) qui est situé dans le dossier "src" sous le nom "Accueil".
import Produit from './Produit';  // Importation du composant "Produit", probablement destiné à afficher les produits de l'application.
import Apropos from './Apropos';  // Importation du composant "Apropos" pour afficher des informations sur l'entreprise.
import Contact from './Contact';  // Importation du composant "Contact" qui permettra aux utilisateurs de voir les informations de contact.
import Connexion from './Connexion';  // Importation du composant "Connexion" pour permettre aux utilisateurs de se connecter.
import Inscription from './Inscription';  // Importation du composant "Inscription" pour permettre aux utilisateurs de créer un compte.
import Paiement from './Paiement';  // Importation du composant "Paiement" pour gérer les paiements dans l'application.
import FormulaireCommande from './FormulaireLivreur';  // Importation du composant "FormulaireCommande" pour permettre aux utilisateurs de passer une commande.

function App() {  // Déclaration du composant principal "App" qui est le composant racine de l'application.
  return (  // Retourne le JSX (structure HTML) du composant App.
    <div className="App">  // Conteneur principal de l'application avec la classe CSS "App".
      <Homepage />  // Ajout du composant "Homepage" qui sera rendu dans la partie supérieure de la page.
      <Produit />  // Ajout du composant "Produit" pour afficher la section des produits disponibles.
      <Apropos />  // Ajout du composant "Apropos" pour fournir des informations sur l'entreprise.
      <Contact />  // Ajout du composant "Contact" pour afficher des informations de contact et un formulaire.
      <Connexion />  // Ajout du composant "Connexion" pour permettre aux utilisateurs de se connecter.
      <Inscription />  // Ajout du composant "Inscription" pour permettre aux utilisateurs de créer un compte.
      <Paiement />  // Ajout du composant "Paiement" pour gérer les processus de paiement.
      <FormulaireCommande />  // Ajout du composant "FormulaireCommande" pour permettre aux utilisateurs de passer une commande.
    </div>
  );  // La structure JSX se termine ici.
}

export default App;  // Export du composant "App" pour qu'il puisse être utilisé ailleurs, notamment dans le fichier "index.js" où il sera monté dans le DOM.
