const Produit = () => {
    const [produits, setProduits] = useState([]);
  
    useEffect(() => {
      // Appeler le service pour récupérer les produits au chargement du composant
      getProduits().then(data => setProduits(data));
    }, []);  // Le tableau vide signifie que l'effet s'exécute une seule fois, lors du premier rendu
  
    return (
      <div>
        <h2>Produits</h2>
        <div className="produits">
          {produits.map((produit) => (
            <div key={produit.id} className="produit-card">
              <h3>{produit.nom}</h3>
              <p>Prix: {produit.prix} €</p>
              <p>{produit.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Produit;
  