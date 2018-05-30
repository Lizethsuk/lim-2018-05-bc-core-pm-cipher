let texto=document.getElementById("mensaje");
let desplazamiento=document.getElementById('numero');
let respuesta=document.getElementById('resultado');
const botonCifrar=document.getElementById('cifrar');
botonCifrar.addEventListener('click', function(){
respuesta.value=cipher.encode(desplazamiento.value,texto.value)}
);
const botonDescifrar=document.getElementById('descifrar');
botonDescifrar.addEventListener('click', function() {
respuesta.value=cipher.decode(desplazamiento.value,texto.value)}
);
