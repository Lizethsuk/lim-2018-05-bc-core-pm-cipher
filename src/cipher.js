window.cipher = {
  encode: function(offset,string) {
      let n=parseInt(offset);
      let raro="";
      for(let i=0;i<string.length;i++){
      let ascci=string.charCodeAt(i);
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
        return raro;
  },

decode: function(offset,string) {
    let n=parseInt(offset);
    let raro="";
    for(let i=0;i<string.length;i++){
    let ascci=string.charCodeAt(i);
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
    return raro;
  },
}
