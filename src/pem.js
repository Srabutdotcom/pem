// @ts-self-types="./pem.d.ts"

/**
 * @typedef {string} base64
 * @typedef {base64} pemstring
 * @typedef {'RSA PRIVATE KEY'|'CERTIFICATE'|'RSA PUBLIC KEY'|'DSA PRIVATE KEY'|'PUBLIC KEY'|'PRIVATE KEY'|'PKCS7'|'NEW CERTIFICATE REQUEST'|'CERTIFICATE REQUEST'|'X509 CRL'|'EC PRIVATE KEY'|'(RSA |EC )?PRIVATE KEY'|'(RSA )?PUBLIC KEY'} pemtype
 */

/**
 * @preserve
 * input pem string and return object containing: string, types, sure, certificate, privateKey, and publicKey to return the expected type of pem string otherwise throw TypeError
 * @param {string} string
 * @return {{string: pemstring, types:pemtype, regex:(type:pemtype)=>RegExp, sure:(type:pemtype)=>pemstring, publicKey:(type:("RSA"|""))=>pemstring, privateKey:(type:("RSA"|"EC"|"DSA"|""))=>pemstring, certificate:()=>pemstring}}
 */
export function pem(string){
   string = String(string);
   return {
      string,
      types: Object.freeze({
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
      }),
      /**
       * 
       * @param {string} type 
       * @returns {RegExp}
       */
      regex(type){
         return new RegExp(`^(-----BEGIN ${type}-----\r?\n?(?:[A-Za-z0-9+/=]+\r?\n?)*-----END ${type}-----)\r?\n?$`)
      },
      /**
       * return pemstring based on optional pem type otherwise throw TypeError
       * @param {pemtype} type 
       * @returns {pemstring|TypeError} pemstring
       */
      sure(type){
         const generalType = '.*' 
         if(!type)this.type = generalType;
         if(!Object.prototype.hasOwnProperty.call(this.types, type))this.type = generalType;
         this.type = type;
         if(this.regex(this.type).test(this.string)==false)return TypeError(`Expected PEM format ${type}`);
         return this.string;
      },
      /**
       * return publicKey pem string or throw TypeError
       * @param {"RSA"|""} type 
       * @returns {pemstring|TypeError} publicKey pem string
       */
      publicKey(type=""){
         type = type!=="RSA"?"":type+" "
         return this.sure(type+"PUBLIC KEY")
      },
      /**
       * return privateKey pem string or throw TypeError
       * @param {"RSA|"DSA"|"EC"|""} type 
       * @returns {pemstring|TypeError} privateKey pem string
       */
      privateKey(type=""){
         type = ["RSA","DSA","EC"].includes(type)==false?"":type+" "
         return this.sure(type+"PRIVATE KEY")
      },
      /**
       * return certificate pem string or throw TypeError
       * @returns {pemstring|TypeError} certificate pem string
       */
      certificate(){
         return this.sure(this.types.CERTIFICATE)
      }
   }
}

// if you want to bundle use the code below
//`esbuild pem.js --bundle --format=esm --target=esnext --outfile=../dist/pem.js --legal-comments=inline`
// npx -p typescript tsc pem.js --declaration --allowJs --emitDeclarationOnly --lib ESNext