const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ message: "Accès refusé" });

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'secretkey');
        req.utilisateur = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Token invalide" });
    }
};
