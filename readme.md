## pem

**pem** is a javaScript library to ensure the string inputed is a kind of various pem string like "private key" or "public key". Should the string match then it will return the string otherwise it will throw TypeError.

### Usage

```javascript
import { pem } from 'pem.js';

const PrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAA...`

const RSAPrivateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAA...`

const pemString = pem(PrivateKeyPem).sure()// -> PrivateKeyPem
const PrivateKey = pem(PrivateKeyPem).privateKey()// -> ensure if it is privateKey and return the value
const RSAPrivateKey = pem(RSAPrivateKeyPem).privateKey("RSA")// -> ensure if it is privateKey and return the value

```

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License
MIT
