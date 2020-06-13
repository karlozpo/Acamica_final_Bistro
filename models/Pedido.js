const sequelize = require('../config/configDB');
const fecha = require("./fecha");


const Pedido = {};

Pedido.crear = async (idUsuario, idFormaPago) => {
    let result = await sequelize.query(
        "INSERT INTO ordenes(idUsuario, idFormaPago, idEstado, horaCreacion, fechaCreacion, fechaActualizacion) VALUES (?, ?, 1, ?, ?, ?)",
        {
            replacements: [idUsuario, idFormaPago, fecha.hora(), fecha.diaActual(), fecha.diaActual()],
        }
    );
    
    return result.length > 0 ? result[0] : null;
};

Pedido.addProductos = async (idOrden, IdProducto, cantidadProductos) => {
    const result = await sequelize.query('INSERT INTO ordenes_producto (idOrden, idProducto, cantidadProductos) VALUES (?,?,?)', {
        replacements: [idOrden, IdProducto, cantidadProductos]
    });
    return result.length > 0 ? result[0] : null;
    /*
    if (result.length > 0) {
      result = result[0];
       } else {
        result = null;
     }
    */
};

Pedido.editar = async (id, idEstado) => {
    const result = await sequelize.query(
        "UPDATE ordenes SET idEstado=?, fechaActualizacion=?  WHERE id=?",
        {
            replacements: [idEstado, fecha.diaActual(), id],
        }
    );
    return result;
}; 

Pedido.obtenerTodos = async () => {
    const result = await sequelize.query(
      
       "SELECT ep.estado, o.horaCreacion, o.fechaCreacion, o.id, p.nombreProducto, fp.tipoDePago, u.nombre, u.direccion FROM ordenes o INNER JOIN ordenes_producto op ON o.id = op.idOrden INNER JOIN productos p ON p.id = op.idProducto INNER JOIN estadoPedido ep ON o.idEstado = ep.id INNER JOIN formaPago fp ON o.idFormaPago = fp.id INNER JOIN usuarios u ON u.id = o.idUsuario",
        {
            type: sequelize.QueryTypes.SELECT,
        }
    );
    return result;
};

Pedido.buscarOrden = async (id) => {
    const result = await sequelize.query("SELECT ep.estado, o.horaCreacion, o.fechaCreacion, o.id, p.nombreProducto, fp.tipoDePago, u.nombre, u.direccion FROM ordenes o INNER JOIN ordenes_producto op ON o.id = op.idOrden INNER JOIN productos p ON p.id = op.idProducto INNER JOIN estadoPedido ep ON o.idEstado = ep.id INNER JOIN formaPago fp ON o.idFormaPago = fp.id INNER JOIN usuarios u ON u.id = o.idUsuario WHERE o.id=?", {
        type: sequelize.QueryTypes.SELECT,
        replacements: [id],
    });
    return result;
};

module.exports = Pedido;
