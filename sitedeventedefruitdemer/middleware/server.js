const express = require('express');
const db = require('./config/db'); // Connexion à la base de données
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route pour récupérer tous les posts
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    } 
    res.send(result); // Renvoie les résultats au frontend
  });
});

// Route pour créer un post
app.post('/api/create', (req, res) => {
  const { userName, title, text } = req.body;
  db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)", [title, text, userName], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(201).send({ message: 'Post created', result });
  });
});

// Route pour liker un post
app.post('/api/like/:id', (req, res) => {
  const { id } = req.params;
  db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: 'Post liked', result });
  });
});

// Route pour supprimer un post
app.delete('/api/delete/:id', (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: 'Post deleted', result });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



