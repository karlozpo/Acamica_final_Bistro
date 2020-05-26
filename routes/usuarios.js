const router = require('express').Router();
const Usuario = require('../models/Usuario');
const tokenManejador = require('../utils/tokenManejador');
const validarToken = require('../middlewares/validarToken');
const validarAdminToken = require('../middlewares/validarAdminToken');

router.route('/')
    .get(validarAdminToken, async (req, res) => {
        const usuarios = await Usuario.obtenerTodos();
        res.json(usuarios);
    })
    .post(async (req, res) => {
        const { usuario, nombre, correo, telefono, direccion, contrasena } = req.body;
        const tokenCreado = await Usuario.crear(usuario, nombre, correo, telefono, direccion, contrasena);
        const datos=  { usuario, nombre, correo, telefono, direccion };
        const token = await tokenManejador.crearToken(datos);
    
       console.log(tokenCreado);
        res.json(token); 
    })

router.route('/login')
    .post(async (req, res) => {
        const { usuario, contrasena } = req.body;
        const usuarioLogueado = await Usuario.autenticar(usuario, contrasena);
        if (usuarioLogueado.length > 0) {
            const token = tokenManejador.crearToken(usuarioLogueado[0]);
            res.json(token);
        } else {
            res.status(401).json('usuario y/o contrasena invalidos');
        }
    });

module.exports = router;