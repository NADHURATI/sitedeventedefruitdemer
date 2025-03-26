import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Appel à l'API backend
    axios.get("http://localhost:3000/api/message")
      .then((response) => {
        setMessage(response.data.message); // Stocke le message dans le state
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du message:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Connexion React & Express</h1>
      <p>{message}</p> {/* Affiche le message du backend */}
    </div>
  );
}


export default App;