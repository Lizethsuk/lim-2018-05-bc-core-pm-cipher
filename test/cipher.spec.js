describe('El objeto cipher', () => {

  it('cipher debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('ahora voy a probar la propiedad cipher.encode', () => {

    it(' cipher.encode debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=>{
       assert.equal(cipher.encode("33",'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
     });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=>{
      assert.equal(cipher.decode("33",'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
      assert.equal(typeof cipher.createCipherWithOffset(1),"object");
    });
  });
});
