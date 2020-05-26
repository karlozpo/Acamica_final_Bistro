const tokenManejador = require('../utils/tokenManejador');

module.exports = function(req, res, next) {
   try {
    const administrador = tokenManejador.validarAdminToken(req.headers.authorization);

    if(administrador.usuario === 'super-admin'){
        next();
    }
    else{
        res.status(400).json('No eres Admin');
    }
       
   } catch (error) {
    res.status(401).json('Unautorized');
   }
      
}