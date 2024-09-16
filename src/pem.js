// @ts-self-types="./pem.d.ts"

/**
 * input pem string and return object containing: string, types, sure, certificate, privateKey, and publicKey to return the expected type of pem string otherwise throw TypeError
 * @param {string} string - pem string
 * @return {Pem} Pem class 
 */
export function pem(string){
   return new Pem(string)
}
/**
 * represent Pem string object
 */
export class Pem {
   static pem = pem
   types= {
      'RSA PRIVATE KEY': 'RSA PRIVATE KEY',
      'CERTIFICATE': 'CERTIFICATE',
      'RSA PUBLIC KEY': 'RSA PUBLIC KEY',
      'DSA PRIVATE KEY': 'DSA PRIVATE KEY',
      'PUBLIC KEY': 'PUBLIC KEY',
      'PRIVATE KEY': 'PRIVATE KEY',
      'PKCS7': 'PKCS7',
      'NEW CERTIFICATE REQUEST': 'NEW CERTIFICATE REQUEST',
      'CERTIFICATE REQUEST': 'CERTIFICATE REQUEST',
      'X509 CRL': 'X509 CRL',
      'EC PRIVATE KEY':'EC PRIVATE KEY',
      '(RSA |EC )?PRIVATE KEY': '(RSA |EC )?PRIVATE KEY',
      '(RSA )?PUBLIC KEY' : '(RSA )?PUBLIC KEY'
   }
   /**@type {string} string - pem string */
   string
   /**
    * 
    * @param {string} pemString - base64 pem string 
    */
   constructor(pemString){
      this.string = pemString
   }
   /**
       * return certificate pem string or throw TypeError
       * @returns {string|TypeError} certificate pem string
       */
   certificate(){
      return this.sure(this.types.CERTIFICATE)
   }
   /**
       * 
       * @param {string} type - string
       * @returns {RegExp} the regex
       */
   regex(type){
      return new RegExp(`^(-----BEGIN ${type}-----\r?\n?(?:[A-Za-z0-9+/=]+\r?\n?)*-----END ${type}-----)\r?\n?$`)
   }
   /**
    * return pemstring based on optional pem type otherwise throw TypeError
    * @param {string} type pem type
    * @returns {string|TypeError} pemstring 
    */
   sure(type){
      const generalType = '.*' 
      if(!type)this.type = generalType;
      if(!Object.prototype.hasOwnProperty.call(this.types, type))this.type = generalType;
      this.type = type;
      if(this.regex(this.type).test(this.string)==false)return TypeError(`Expected PEM format ${type}`);
      return this.string;
   }
   /**
    * return publicKey pem string or throw TypeError
    * @param {"RSA"|""} type - type
    * @returns {string|TypeError} publicKey pem string
    */
   publicKey(type=""){
      type = type!=="RSA"?"(RSA )?":type+" "
      return this.sure(type+"PUBLIC KEY")
   }
   /**
    * return privateKey pem string or throw TypeError
    * @param {"RSA|"DSA"|"EC"|""} type 
    * @returns {string|TypeError} privateKey pem string
    */
   privateKey(type=""){
      type = ["RSA","DSA","EC"].includes(type)==false?"(RSA |EC |DSA )?":type+" "
      return this.sure(type+"PRIVATE KEY")
   }
}

// if you want to bundle use the code below
//`esbuild pem.js --bundle --format=esm --target=esnext --outfile=../dist/pem.js --legal-comments=inline`
// npx -p typescript tsc pem.js --declaration --allowJs --emitDeclarationOnly --lib ESNext