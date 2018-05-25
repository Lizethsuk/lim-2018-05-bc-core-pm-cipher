let texto=document.getElementById("mensaje");
let respuesta=document.getElementById('resultado');
const botonCifrar=document.getElementById('cifrar');
botonCifrar.addEventListener("click", codificar)
function codificar() {
  let raro="";
  let palabra=texto.value;
  for(let i=0;i<palabra.length;i++){
  let ascci=palabra.charCodeAt(i);
  if (ascci>=65 && ascci<=90) {
    let grande= String.fromCharCode((ascci-65+6)%26+65);
    raro+= grande;
  } else if (ascci>=97 && ascci<=122){
    let chica= String.fromCharCode((ascci-97+6)%26+97);
    raro+= chica;
  } else {
    let otro= String.fromCharCode(ascci);
    raro+= otro;
    }
  }
respuesta.value= raro;
}
const botonDescifrar=document.getElementById('descifrar');
botonDescifrar.addEventListener('click', decodificar);
function decodificar() {
let rara="";
let palabra=texto.value;
for(let i=0;i<palabra.length;i++){
let ascci=palabra.charCodeAt(i);
if (ascci>=65 && ascci<=90) {
  let grande= String.fromCharCode((ascci-65+20)%26+65);
  rara+= grande;
} else if (ascci>=97 && ascci<=122){
  let chica= String.fromCharCode((ascci-97+20)%26+97);
  rara+= chica;
} else {
  let otro= String.fromCharCode(ascci);
  rara+= otro;
  }
}
respuesta.value= rara;
}
