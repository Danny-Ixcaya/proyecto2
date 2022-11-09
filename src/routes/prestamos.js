const express = require('express');
const router = express.Router();

router.get('/prestamos-crear', (req, res) => {
    res.render('prestamo/prestamo');
});

router.get('/prestamos-inicio', (req, res) => {
    res.render('prestamo/inicio');
});

router.get('/prestamos-ver', (req, res) => {
    res.render('prestamo/ver-prestamo');
});

module.exports = router;