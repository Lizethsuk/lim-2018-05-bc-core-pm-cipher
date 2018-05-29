let texto=document.getElementById("mensaje");
let offSet=document.getElementById('numero');
let respuesta=document.getElementById('resultado');
const botonCifrar=document.getElementById('cifrar');
botonCifrar.addEventListener("click", cipher.encode);
const botonDescifrar=document.getElementById('descifrar');
botonDescifrar.addEventListener('click', cipher.decode);
