const express = require('express');
const Prestamo = require('../models/prestamo.js');
const router = express.Router();

router.get('/prestamos-crear', (req, res) => {
    res.render('prestamo/prestamo');
});
router.post('/prestamos-crear', async (req, res) => {
    const prestamos = Prestamo(req.body);
    await prestamos.save();
    res.redirect('/prestamos-crear');
});

router.get('/prestamos-inicio', (req, res) => {
    res.render('prestamo/inicio');
});

router.get('/prestamos-ver', (req, res) => {
    res.render('prestamo/ver-prestamo');
});

module.exports = router;