
const fecha = {};

fecha.diaActual = function() {
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; 
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let fechaActual = year + "-" + month + "-" + day;
return fechaActual
}

fecha.hora = function() {
    let d = new Date();
    let n = d.getHours();
    let m = d.getMinutes();
   let horaActual = n+":"+m;
    return horaActual
  }

module.exports = fecha;