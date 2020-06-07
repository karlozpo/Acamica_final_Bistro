const router = require("express").Router();
const Pedido = require("../models/Pedido");
const validarToken = require("../middlewares/validarToken");
const validarAdminToken = require("../middlewares/validarAdminToken");

router
  .route("/")
  .get(validarAdminToken, async (req, res) => {
    const Pedidos = await Pedido.obtenerTodos();
    res.json(Pedidos);
  })
  .post(validarToken, async (req, res) => {
    try {
      const { idFormaPago, idProducto, cantidadProductos } = req.body;
      const idUsuario = req.usuarioLogueado.id;
      const idOrdenCreada = await Pedido.crear(idUsuario, idFormaPago);
      const idPedidoProducto = await Pedido.addProductos(
        idOrdenCreada,
        idProducto,
        cantidadProductos
      );
      res.json({ idPedidoProducto, idOrdenCreada });
    } catch (error) {
    
        res.status(500).json({error:error.message});
    }
  });

router
  .route("/:id")
  .get(validarAdminToken, async (req, res) => {
    const resultado = await Pedido.buscarOrden(req.params.id);
    res.json(resultado);
  })

  .put(validarAdminToken, async (req, res) => {
    const { idEstado } = req.body;
    const id = req.params.id;
    await Pedido.editar(id, idEstado);
    res.json(`Estado de orden ${id} editado`);
  });
module.exports = router;
