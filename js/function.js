

console.log("Hola Mundo!");


document.getElementById("Boton.MdoOsc").onclick = function modoOscuro() {
    console.log("capturamos el click, MUCHAS GRACIAS POR LOS CONOCIMIENTOS BRINDADOS EN ESTE CURSO ;)");
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
    

}

document.getElementById("Boton.VersExt").onclick = function versionExtendida() {
   document.getElementById("info-extendida").style.display = "block";

}

document.getElementById("Boton.Normal").onclick = function remover() {
    document.getElementById("info-extendida").style.display = "none";
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
 
 }


// Este es otro metodo para volver el modo normal refrescando la pagina
// document.getElementById("Boton.Normal").onclick = function remover() {
//     window.location.reload();
 
//  }

