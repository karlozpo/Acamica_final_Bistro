const router = require('express').Router();
const Producto = require('../models/Producto');
const validarToken = require('../middlewares/validarToken');
const validarAdminToken = require('../middlewares/validarAdminToken');

router.route('/')
    .get(async (req, res) => {
        const productos = await Producto.obtenerTodos();
        res.json(productos);
    })
    .post(validarAdminToken, async (req, res) => {
        const { nombreProducto, precio, imagenUrl } = req.body;
        await Producto.crear(nombreProducto, precio, imagenUrl);
        res.json("Producto Creado"); 
    })
    .put(validarAdminToken, async (req, res) => {
        const { id,nombreProducto, precio, imagenUrl } = req.body;
        await Producto.editar(id,nombreProducto, precio, imagenUrl);
        res.json("Producto editado"); 
    })
    

    router.route('/:id')
    .get(async (req, res) => {
        const resultado = await Producto.buscarProducto(req.params.id);
        res.json(resultado);
    })
    .delete(validarAdminToken, async (req, res) => {
        await Producto.eliminar(req.params.id);
        res.json("Producto eliminado"); 
    })
    ;
    

module.exports = router;