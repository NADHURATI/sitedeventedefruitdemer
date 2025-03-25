

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Saindoumy15@e',
    database: 'fruit_de_mer'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connexion à la base de données réussie');
});

module.exports = db;
