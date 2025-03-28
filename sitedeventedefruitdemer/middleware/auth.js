const jwt = require('jsonwebtoken');
// Importation du module 'jsonwebtoken' pour gérer les tokens JWT

module.exports = (req, res, next) => {
    // Exportation d'un middleware pour protéger les routes en vérifiant le token d'authentification

    const token = req.header('Authorization');
    // Récupération du token depuis l'en-tête 'Authorization' de la requête HTTP

    if (!token) return res.status(403).json({ message: "Accès refusé" });
    // Si aucun token n'est fourni, on renvoie une erreur 403 (Accès interdit)

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'secretkey');
        // Vérification et déchiffrement du token JWT (on extrait le token après "Bearer ")

        req.utilisateur = decoded;
        // Ajout des informations du token décodé dans 'req.utilisateur' pour les utiliser dans les routes protégées

        next();
        // Passe à la prochaine fonction middleware ou au contrôleur
    } catch (err) {
        res.status(403).json({ message: "Token invalide" });
        // Si le token est invalide ou expiré, on renvoie une erreur 403
    }
};

