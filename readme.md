Here's a `README.md` based on your code:

---

# @aicone/pem

`@aicone/pem` is a JavaScript library for handling PEM-encoded strings, providing methods to validate and extract various PEM types, such as certificates, public keys, and private keys. This library supports different PEM types, including RSA, DSA, and EC formats, making it ideal for working with secure data in cryptographic and certificate-based applications.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [Extracting Certificates](#extracting-certificates)
  - [Extracting Public Keys](#extracting-public-keys)
  - [Extracting Private Keys](#extracting-private-keys)
- [API Reference](#api-reference)
- [Examples](#examples)
- [License](#license)

## Installation

To add `@aicone/pem` to your Deno project, use:

```bash
deno add jsr:@aicone/pem
```

## Features

- **Supports Multiple PEM Types**: Handles `RSA PRIVATE KEY`, `CERTIFICATE`, `RSA PUBLIC KEY`, `DSA PRIVATE KEY`, and more.
- **Error Handling**: Throws a `TypeError` if the PEM string does not match the expected format.
- **Regex-based Validation**: Validates PEM strings with a regular expression.

## Usage

### Importing the Library

```javascript
import { pem, Pem } from 'jsr:@aicone/pem';
```

### Extracting Certificates

Use the `certificate()` method to extract a certificate PEM string. If the string format is invalid, a `TypeError` is thrown.

```javascript
const pemString = '-----BEGIN CERTIFICATE-----\n...base64 data...\n-----END CERTIFICATE-----';
const pemObject = pem(pemString);
try {
  const certificate = pemObject.certificate();
  console.log(certificate);
} catch (error) {
  console.error(error); // Expected PEM format CERTIFICATE
}
```

### Extracting Public Keys

Use the `publicKey()` method to retrieve a public key PEM string. Optionally, specify `"RSA"` for RSA public keys.

```javascript
try {
  const publicKey = pemObject.publicKey("RSA");
  console.log(publicKey);
} catch (error) {
  console.error(error); // Expected PEM format RSA PUBLIC KEY
}
```

### Extracting Private Keys

The `privateKey()` method retrieves a private key PEM string. Optionally, specify `"RSA"`, `"DSA"`, or `"EC"` for specific types of private keys.

```javascript
try {
  const privateKey = pemObject.privateKey("RSA");
  console.log(privateKey);
} catch (error) {
  console.error(error); // Expected PEM format RSA PRIVATE KEY
}
```

## API Reference

### `pem(string)`

Takes a PEM string as input and returns an instance of the `Pem` class.

- **Parameters**:
  - `string` (string): The PEM-encoded string.
- **Returns**: `Pem` instance.

### `Pem` Class

The `Pem` class provides methods to extract and validate PEM strings for various types.

#### `certificate()`

Returns the certificate PEM string if it exists in the input; otherwise, throws a `TypeError`.

- **Returns**: `string | TypeError`

#### `publicKey(type)`

Retrieves a public key PEM string based on the specified type, defaulting to any public key if no type is provided.

- **Parameters**:
  - `type` (string, optional): Specify `"RSA"` for RSA public keys.
- **Returns**: `string | TypeError`

#### `privateKey(type)`

Retrieves a private key PEM string based on the specified type, defaulting to any private key if no type is provided.

- **Parameters**:
  - `type` (string, optional): Specify `"RSA"`, `"DSA"`, or `"EC"` for specific private key types.
- **Returns**: `string | TypeError`

## Examples

### Example 1: Validating and Extracting a Certificate

```javascript
const pemString = '-----BEGIN CERTIFICATE-----\n...base64 data...\n-----END CERTIFICATE-----';
const pemObject = pem(pemString);
try {
  console.log(pemObject.certificate());
} catch (error) {
  console.error(error.message);
}
```

### Example 2: Extracting an RSA Public Key

```javascript
const pemObject = pem('-----BEGIN RSA PUBLIC KEY-----\n...base64 data...\n-----END RSA PUBLIC KEY-----');
try {
  console.log(pemObject.publicKey("RSA"));
} catch (error) {
  console.error(error.message);
}
```

### Example 3: Extracting an EC Private Key

```javascript
const pemObject = pem('-----BEGIN EC PRIVATE KEY-----\n...base64 data...\n-----END EC PRIVATE KEY-----');
try {
  console.log(pemObject.privateKey("EC"));
} catch (error) {
  console.error(error.message);
}
```

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License

This project is licensed under the MIT License.
