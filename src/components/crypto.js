import CryptoJS from 'crypto-js'
export default{
    install(Vue){
      Vue.prototype.$DesEncrypted = function desEncrypt(data, key) {   // 加密
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.AES.encrypt(data, keyHex,{
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString(); // 返回的为密文
      };
      Vue.prototype.$DesEncrypted = function decryptByDES(ciphertext, key) {  // 解密
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var decryted = CryptoJS.AES.decrypt({
          ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
        }, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return decryted.toString(CryptoJS.enc.Utf8)
      }
    }
}
