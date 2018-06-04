window.cipher = {
  encode: (offset,string) => {
      let output="";
      for(let i = 0; i < string.length; i++){
      let ascci = string.charCodeAt(i);
      if (ascci >= 65 && ascci <= 90) {
        let code= String.fromCharCode((ascci-65+parseInt(offset))%26+65);
        output += code;
      } else if (ascci>=97 && ascci<=122){
        let code = String.fromCharCode((ascci-97+parseInt(offset))%26+97);
        output += code;
      } else {
        let code= String.fromCharCode(ascci);
        output += code;
        }
      }
        return output;
  },
decode: (offset,string) =>{
    let n=parseInt(offset);
    let output="";
    for(let i=0;i<string.length;i++){
    let ascci=string.charCodeAt(i);
    if (ascci>=65 && ascci<=90) {
      if ((ascci-n-65)%26==0||(ascci-n-65)%26>0) {
        let code= String.fromCharCode((ascci-65-n)%26+65);
      output+= code;
    } else {let code= String.fromCharCode((ascci-65-n)%26+91);
      output+= code;
      }
    } else if (ascci>=97 && ascci<=122){
      if ((ascci-n-97)%26==0||(ascci-n-97)%26>0) {
        let code= String.fromCharCode((ascci-97-n)%26 +97);
      output+= code;
    } else {let code= String.fromCharCode((ascci-97-n)%26+123);
      output+= code;
      }
    } else {
      let code= String.fromCharCode(ascci);
      output+= code;
      }
    }
    return output
  },
  createCipherWithOffset: (offset)=>{
    let cdf={
      encode: (string)=>{
        return cipher.encode(offset,string);
      },
      decode: (string)=>{
        return cipher.decode(offset,string);
      }
    }
    return cdf
  }
}


//console.log(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
