const sequelize = require('../config/configDB');
const Producto = {};

Producto.crear = async (nombreProducto, precio, imagenUrl) => {
    const result = await sequelize.query('INSERT INTO productos(nombreProducto, precio, imagenUrl) VALUES (?, ?, ?)', {
        replacements: [nombreProducto, precio, imagenUrl]
    });
    return result;
};

Producto.editar = async (id,nombreProducto, precio, imagenUrl) => {
    const result = await sequelize.query('UPDATE productos SET nombreProducto=?, precio=?, imagenUrl=?  WHERE id=?', {
        replacements: [nombreProducto, precio, imagenUrl, id]
    });
    return result;
};

Producto.eliminar = async (id) => {
    const result = await sequelize.query('DELETE FROM productos WHERE id=?', {
        replacements: [id]
    });
    return result;
};

Producto.obtenerTodos = async () => {
    const result = await sequelize.query('SELECT id,nombreProducto, precio, imagenUrl FROM productos', {
        type: sequelize.QueryTypes.SELECT
    });
    return result;
}

Producto.buscarProducto = async (id) => {
    const result = await sequelize.query('SELECT * FROM productos WHERE id=?', {
        type: sequelize.QueryTypes.SELECT,
        replacements: [id]
    });
    console.log(result);
    return result;
};

module.exports = Producto;