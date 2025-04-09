const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/hash', (req, res) => {
    res.render('hash-generator', { hash: null, error: null });
});

router.post('/hash', async (req, res) => {
    const { password } = req.body;
    if (!password) return res.render('hash-generator', { hash: null, error: "Mot de passe manquant" });

    const hash = await bcrypt.hash(password, 10);
    console.log("Hash généré :", hash);
    res.render('hash-generator', { hash, error: null });
});

module.exports = router;
