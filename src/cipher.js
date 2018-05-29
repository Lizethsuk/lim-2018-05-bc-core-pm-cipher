window.cipher = {
  encode: function() {
      let raro="";
      let palabra=texto.value;
      let n=Math.abs(parseInt(offSet.value));
      for(let i=0;i<palabra.length;i++){
      let ascci=palabra.charCodeAt(i);
      if (ascci>=65 && ascci<=90) {
        let code= String.fromCharCode((ascci-65+n)%26+65);
        raro+= code;
      } else if (ascci>=97 && ascci<=122){
        let code= String.fromCharCode((ascci-97+n)%26+97);
        raro+= code;
      } else {
        let code= String.fromCharCode(ascci);
        raro+= code;
        }
      }
    respuesta.value= raro;
  },

decode: function() {
    let raro="";
    let palabra=texto.value;
    let n=Math.abs(parseInt(offSet.value));
    for(let i=0;i<palabra.length;i++){
    let ascci=palabra.charCodeAt(i);
    if (ascci>=65 && ascci<=90) {
      if ((ascci-n-65)%26==0||(ascci-n-65)%26>0) {
        let code= String.fromCharCode((ascci-65-n)%26+65);
      raro+= code;
    } else {let code= String.fromCharCode((ascci-65-n)%26+91);
        raro+= code;
      }
    } else if (ascci>=97 && ascci<=122){
      if ((ascci-n-97)%26==0||(ascci-n-97)%26>0) {
        let code= String.fromCharCode((ascci-97-n)%26 +97);
      raro+= code;
    } else {let code= String.fromCharCode((ascci-97-n)%26+123);
        raro+= code;
      }
    } else {
      let code= String.fromCharCode(ascci);
      raro+= code;
      }
    }
    respuesta.value= raro;
  },
  createCipherWithOffset: function(){
  const palabra="abcdefghijklmnopqrstuvwxyz";
  const metod=cipher.encode(palabra);
  const metod2=cipher.decode(palabra);
}
}
