import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
 

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ userName: '', title: '', text: '' });

  // Récupérer tous les posts dès le chargement du composant
  useEffect(() => {
    axios.get('http://localhost:3000/api/get')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur lors de la récupération des posts!', error);
      });
  }, []);

  // Fonction pour créer un nouveau post
  const handleCreatePost = () => {
    axios.post('http://localhost:3000/api/create', {
      userName: newPost.userName,
      title: newPost.title,
      text: newPost.text
    })
    .then(response => {
      console.log(response.data);
      setPosts([...posts, response.data.result]);
    })
    .catch(error => {
      console.error('Erreur lors de la création du post', error);
    });
  };

  // Fonction pour liker un post
  const handleLike = (id) => {
    axios.post(`http://localhost:3000/api/like/${id}`)
      .then(response => {
        console.log(response.data);
        // Mettre à jour l'état ou recharger les posts pour obtenir les likes mis à jour
      })
      .catch(error => {
        console.error('Erreur lors du like du post', error);
      });
  };

  return (
    <div className="App">
      <h1>Liste des posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.post_text}</p>
            <p>Publié par: {post.user_name}</p>
            <button onClick={() => handleLike(post.id)}>Like</button>
          </li>
        ))}
      </ul>

      <h2>Créer un nouveau post</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={newPost.userName}
        onChange={(e) => setNewPost({ ...newPost, userName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Titre du post"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Contenu du post"
        value={newPost.text}
        onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
      />
      <button onClick={handleCreatePost}>Créer le post</button>
    </div>
  );
}

export default App;


