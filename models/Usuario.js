const sequelize = require('../config/configDB');

const Usuario = {};

Usuario.crear = async (usuario, nombre, correo, telefono, direccion, contrasena) => {
    const result = await sequelize.query('INSERT INTO usuarios(usuario, nombre, correo, telefono, direccion, contrasena, esAdmin) VALUES (?, ?, ?, ?, ?, ?, FALSE)', {
        replacements: [usuario, nombre, correo, telefono, direccion, contrasena]
    });
    return result;
};

Usuario.obtenerTodos = async () => {
    const result = await sequelize.query('SELECT usuario, nombre, correo, telefono, direccion FROM usuarios', {
        type: sequelize.QueryTypes.SELECT
    });
    return result;
}

Usuario.autenticar = async (usuario, contrasena) => {
    const result = await sequelize.query('SELECT id, usuario FROM usuarios WHERE usuario=? AND contrasena=?', {
        type: sequelize.QueryTypes.SELECT,
        replacements: [usuario, contrasena]
    });
    return result;
}

module.exports = Usuario;