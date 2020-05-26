const tokenManejador = require('../utils/tokenManejador');

module.exports = function(req, res, next) {

    try {
        const orden = tokenManejador.crearOrden(req.headers.idOrden);
        req.idOrden = orden;
        console.log(orden);
        next();
    } catch (error) {
        res.status(400).json('Acceso denegado1');
    }
}