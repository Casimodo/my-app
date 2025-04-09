const express = require('express');
const router = express.Router();

// Middleware pour vérifier si l'utilisateur est connecté
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.redirect('/auth/login');
  }
}

// Accueil sécurisé
router.get('/', isAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

module.exports = router;
