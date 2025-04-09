const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const usersPath = path.join(__dirname, '..', 'config', 'users.json');

function getUsers() {
    const data = fs.readFileSync(usersPath, 'utf-8');
    return JSON.parse(data);
}

// Page de login
router.get('/login', (req, res) => {
    res.render('login');
});

// Soumission du login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("Tentative de connexion :", username, password);

    const users = getUsers();
    const user = users.find(u => u.username === username);

    if (!user) {
        console.log("Utilisateur non trouvé !");
        return res.render('error', { message: "Utilisateur inconnu" });
    }

    try {
        const match = await bcrypt.compare(password, user.password);
        console.log("Mot de passe OK ?", match);

        if (!match) {
            return res.render('error', { message: "Mot de passe incorrect" });
        }

        req.session.user = {
            username: user.username,
            access: user.access
        };
        console.log("Connexion réussie !");
        res.redirect('/');
    } catch (err) {
        console.error("Erreur lors de la comparaison bcrypt :", err);
        return res.render('error', { message: "Erreur serveur" });
    }
});


// Déconnexion
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
});

module.exports = router;
