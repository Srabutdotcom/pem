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
     *
     * @param {string} pemString - base64 pem string
     */
    constructor(pemString: string);
    types: {
        'RSA PRIVATE KEY': string;
        CERTIFICATE: string;
        'RSA PUBLIC KEY': string;
        'DSA PRIVATE KEY': string;
        'PUBLIC KEY': string;
        'PRIVATE KEY': string;
        PKCS7: string;
        'NEW CERTIFICATE REQUEST': string;
        'CERTIFICATE REQUEST': string;
        'X509 CRL': string;
        'EC PRIVATE KEY': string;
        '(RSA |EC )?PRIVATE KEY': string;
        '(RSA )?PUBLIC KEY': string;
    };
    /**@type {string} string - pem string */
    string: string;
    /**
        * return certificate pem string or throw TypeError
        * @returns {string|TypeError} certificate pem string
        */
    certificate(): string | TypeError;
    /**
        *
        * @param {string} type - string
        * @returns {RegExp} the regex
        */
    regex(type: string): RegExp;
    /**
     * return pemstring based on optional pem type otherwise throw TypeError
     * @param {string} type pem type
     * @returns {string|TypeError} pemstring
     */
    sure(type: string): string | TypeError;
    type: string;
    /**
     * return publicKey pem string or throw TypeError
     * @param {"RSA"|""} type - type
     * @returns {string|TypeError} publicKey pem string
     */
    publicKey(type?: "RSA" | ""): string | TypeError;
    /**
     * return privateKey pem string or throw TypeError
     * @param {"RSA|"DSA"|"EC"|""} type
     * @returns {string|TypeError} privateKey pem string
     */
    privateKey(type?: string): string | TypeError;
}
