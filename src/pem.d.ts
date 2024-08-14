/**
 * @typedef {string} base64
 * @typedef {base64} pemstring
 * @typedef {'RSA PRIVATE KEY'|'CERTIFICATE'|'RSA PUBLIC KEY'|'DSA PRIVATE KEY'|'PUBLIC KEY'|'PRIVATE KEY'|'PKCS7'|'NEW CERTIFICATE REQUEST'|'CERTIFICATE REQUEST'|'X509 CRL'|'EC PRIVATE KEY'|'(RSA |EC )?PRIVATE KEY'|'(RSA )?PUBLIC KEY'} pemtype
 */
/**
 * @preserve
 * input pem string and return the expected type of pem string otherwise throw TypeError
 * @param {string} string
 * @return {{string: pemstring, types:pemtype, regex:(type:pemtype)=>RegExp, sure:(type:pemtype)=>pemstring, publicKey:(type:("RSA"|""))=>pemstring, privateKey:(type:("RSA"|"EC"|"DSA"|""))=>pemstring, certificate:()=>pemstring}}
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
export type base64 = string;
export type pemstring = base64;
export type pemtype = "RSA PRIVATE KEY" | "CERTIFICATE" | "RSA PUBLIC KEY" | "DSA PRIVATE KEY" | "PUBLIC KEY" | "PRIVATE KEY" | "PKCS7" | "NEW CERTIFICATE REQUEST" | "CERTIFICATE REQUEST" | "X509 CRL" | "EC PRIVATE KEY" | "(RSA |EC )?PRIVATE KEY" | "(RSA )?PUBLIC KEY";
