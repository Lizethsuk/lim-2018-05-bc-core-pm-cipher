let  texto1= document.getElementById('mensaje');
const botonCifrar=document.getElementById('cifrar');
botonCifrar.addEventListener("click", traducir);
function traducir() {
  const producto=texto1.value;
  mensaje0.value= producto.toUpperCase();
}

let botonDescifrar=document.getElementById('descifrar');
botonDescifrar.addEventListener('click', traducir2);
function traducir2() {
  const producto2=texto1.value;
  mensaje0.value=producto2.toUppercase();
}

const mensaje0=document.getElementById('resultado');

//let texto1= document.getElementById('mensaje');
const botonCifrar=document.getElementById('cifrar');
botonCifrar.addEventListener("click", traducir);
function traducir() {
  const raro='';
  for (let i=0; i<texto1.length; i++) {
    let posicion=texto1.charCodeAt(i);
    let asci=(posicion-65+25)%26+65;
    let palabra=fromCharCodeAt(asci);
    raro=raro + palabra;
    }
  const producto=raro.value;
  raro.value= producto.toUpperCase();
}

let botonDescifrar=document.getElementById('descifrar');
botonDescifrar.addEventListener('click', traducir2);
function traducir2() {
  const raro='';
  for (let i=0; i<texto1.length; i++) {
    console.log(texto1[i]);
    console.log(texto1.charCodeAt(i));
    console.log(((texto1.charCodeAt(i))-65+33)%26+65);
    console.log(fromCharCodeAt(((texto1.charCodeAt(i)-65+33)%26+65)));
  }
  const producto2=texto1.value;
  mensaje0.value=producto.toUppercase();
}
const mensaje0=document.getElementById('resultado');





//let texto="mandarina sabrosa";
let palabra =texto.toUpperCase();
console.log(palabra);
console.log(palabra.length);
let raro="";
for(let i=0;i<palabra.length;i++){
console.log(palabra.charCodeAt(i));
console.log((palabra.charCodeAt(i)-65+6)%26+65)
console.log(String.fromCharCode((palabra.charCodeAt(i)-65+6)%26+65));
raro=raro+ String.fromCharCode((palabra.charCodeAt(i)-65+6)%26+65);
let respuesta=raro;
}
