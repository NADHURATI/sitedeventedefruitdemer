

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Saindoumy15@e',
    port:3306,
    database: 'fruits_de_mer'
});

connection.connect(erreur => {
    if (erreur) 
        console.log(erreur)
    return;
    
});

console.log('Connexion à la base de données réussie');

module.exports = connection;
