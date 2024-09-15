/** @typedef {string} base64 base64 as variant of string */
/** @typedef {base64} pemstring pemstring as variant of base64 */
/** @typedef {'RSA PRIVATE KEY'|'CERTIFICATE'|'RSA PUBLIC KEY'|'DSA PRIVATE KEY'|'PUBLIC KEY'|'PRIVATE KEY'|'PKCS7'|'NEW CERTIFICATE REQUEST'|'CERTIFICATE REQUEST'|'X509 CRL'|'EC PRIVATE KEY'|'(RSA |EC )?PRIVATE KEY'|'(RSA )?PUBLIC KEY'} pemtype various type of pemstring*/
/**
 * input pem string and return object containing: string, types, sure, certificate, privateKey, and publicKey to return the expected type of pem string otherwise throw TypeError
 * @param {string} string - pem string
 * @return {{string: pemstring, types:pemtype, regex:(type:pemtype)=>RegExp, sure:(type:pemtype)=>pemstring, publicKey:(type:("RSA"|""))=>pemstring, privateKey:(type:("RSA"|"EC"|"DSA"|""))=>pemstring, certificate:()=>pemstring}} object containing: string, types, sure, certificate, privateKey, and publicKey
 */
export function pem(string: string): {
    string: pemstring;
    types: pemtype;
    regex: (type: pemtype) => RegExp;
    sure: (type: pemtype) => pemstring;
    publicKey: (type: ("RSA" | "")) => pemstring;
    privateKey: (type: ("RSA" | "EC" | "DSA" | "")) => pemstring;
    certificate: () => pemstring;
};
/**
 * base64 as variant of string
 */
export type base64 = string;
/**
 * pemstring as variant of base64
 */
export type pemstring = base64;
/**
 * various type of pemstring
 */
export type pemtype = "RSA PRIVATE KEY" | "CERTIFICATE" | "RSA PUBLIC KEY" | "DSA PRIVATE KEY" | "PUBLIC KEY" | "PRIVATE KEY" | "PKCS7" | "NEW CERTIFICATE REQUEST" | "CERTIFICATE REQUEST" | "X509 CRL" | "EC PRIVATE KEY" | "(RSA |EC )?PRIVATE KEY" | "(RSA )?PUBLIC KEY";
