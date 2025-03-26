import logo from '../logo.svg';
import '../styles/app.css';
import Homepage from './Accueil';
import Produit from './Produit'
import Apropos from './Apropos';
import Contact from './Contact';
import Connexion from './Connexion';
import Inscription from './Inscription'




function App() {
  return (
    <div className="App">
      <Homepage />
      <Produit />
      <Apropos />
      <Contact />
      <Connexion />
      <Inscription />
      
    </div>
  );
}

export default App;
