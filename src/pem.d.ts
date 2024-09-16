/** @typedef {string} base64 base64 as variant of string */
/** @typedef {base64} pemstring pemstring as variant of base64 */
/** @typedef {'RSA PRIVATE KEY'|'CERTIFICATE'|'RSA PUBLIC KEY'|'DSA PRIVATE KEY'|'PUBLIC KEY'|'PRIVATE KEY'|'PKCS7'|'NEW CERTIFICATE REQUEST'|'CERTIFICATE REQUEST'|'X509 CRL'|'EC PRIVATE KEY'|'(RSA |EC )?PRIVATE KEY'|'(RSA )?PUBLIC KEY'} pemtype various type of pemstring*/
/**
 * input pem string and return object containing: string, types, sure, certificate, privateKey, and publicKey to return the expected type of pem string otherwise throw TypeError
 * @param {string} string - pem string
 * @return {Pem} Pem class
 */
export function pem(string: string): Pem;
/**
 * represent Pem string object
 */
export class Pem {
    static pem: typeof pem;
    /**
     * @param {string} pemString - base64 pem string
     */
    constructor(pemString: string);
    types: {
        "RSA PRIVATE KEY": string;
        CERTIFICATE: string;
        "RSA PUBLIC KEY": string;
        "DSA PRIVATE KEY": string;
        "PUBLIC KEY": string;
        "PRIVATE KEY": string;
        PKCS7: string;
        "NEW CERTIFICATE REQUEST": string;
        "CERTIFICATE REQUEST": string;
        "X509 CRL": string;
        "EC PRIVATE KEY": string;
        "(RSA |EC )?PRIVATE KEY": string;
        "(RSA )?PUBLIC KEY": string;
    };
    /**@type {string} string - description */
    string: string;
    /**
     * return certificate pem string or throw TypeError
     * @returns {pemstring|TypeError} certificate pem string
     */
    certificate(): pemstring | TypeError;
    /**
     * @param {string} type - string
     * @returns {RegExp} the regex
     */
    regex(type: string): RegExp;
    /**
     * return pemstring based on optional pem type otherwise throw TypeError
     * @param {pemtype} type pem type
     * @returns {pemstring|TypeError} pemstring
     */
    sure(type: pemtype): pemstring | TypeError;
    type: string;
    /**
     * return publicKey pem string or throw TypeError
     * @param {"RSA"|""} type - type
     * @returns {pemstring|TypeError} publicKey pem string
     */
    publicKey(type?: "RSA" | ""): pemstring | TypeError;
    /**
     * return privateKey pem string or throw TypeError
     * @param {"RSA|"DSA"|"EC"|""} type
     * @returns {pemstring|TypeError} privateKey pem string
     */
    privateKey(type?: string): pemstring | TypeError;
}
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
export type pemtype =
    | "RSA PRIVATE KEY"
    | "CERTIFICATE"
    | "RSA PUBLIC KEY"
    | "DSA PRIVATE KEY"
    | "PUBLIC KEY"
    | "PRIVATE KEY"
    | "PKCS7"
    | "NEW CERTIFICATE REQUEST"
    | "CERTIFICATE REQUEST"
    | "X509 CRL"
    | "EC PRIVATE KEY"
    | "(RSA |EC )?PRIVATE KEY"
    | "(RSA )?PUBLIC KEY";
