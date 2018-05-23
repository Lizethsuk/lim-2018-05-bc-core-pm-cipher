const texto1= document.getElementById('mensaje');
const botonCifrar=document.getElementById('cifrar');
botonCifrar.addEventListener("click", traducir);
function traducir() {
  const producto=texto1.value;
  mensaje0.value= producto;
}

const botonDescifrar=document.getElementById('descifrar');
botonDescifrar.addEventListener('click', traducir2);
function traducir2() {
  const producto2=texto1.value;
  mensaje0.value=producto2
}

const mensaje0=document.getElementById('resultado');
