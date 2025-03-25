import logo from '../logo.svg';
import '../styles/App.css';
import Homepage from './Accueil';
import Produit from './Produit'
import Apropos from './Apropos';



function App() {
  return (
    <div className="App">
      <Homepage />
      <Produit />
      <Apropos />
      
    </div>
  );
}

export default App;
