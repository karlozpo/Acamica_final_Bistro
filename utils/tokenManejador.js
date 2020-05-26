const jwt = require('jsonwebtoken');

const jwtFirma = 'misupercontrasenaparaencriptartoken';
const tokenManejador = {};

tokenManejador.crearToken = usuario => jwt.sign(usuario, jwtFirma);

tokenManejador.validarToken = token => jwt.verify(token, jwtFirma);

tokenManejador.validarAdminToken = esAdmin => jwt.verify(esAdmin, jwtFirma);

module.exports = tokenManejador;