import { assertEquals } from "jsr:@std/assert";
import { pem } from "../src/pem.js";
import * as samples from "./sample_pem.js"

Deno.test(
   `test ${samples.PrivateKeyPem}`,
   ()=>{
      const pem_string = pem(samples.PrivateKeyPem).privateKey();
      assertEquals(pem_string,samples.PrivateKeyPem);
   }
)

Deno.test(
   `test ${samples.PublicKeyPem}`,
   ()=>{
      const pem_string = pem(samples.PublicKeyPem).publicKey();
      assertEquals(pem_string,samples.PublicKeyPem);
   }
)

Deno.test(
   `test ${samples.CertificatePem}`,
   ()=>{
      const pem_string = pem(samples.CertificatePem).certificate();
      assertEquals(pem_string,samples.CertificatePem);
   }
)

Deno.test(
   `test ${samples.RSAPrivateKeyPem}`,
   ()=>{
      const pem_string = pem(samples.RSAPrivateKeyPem).privateKey("RSA");
      assertEquals(pem_string,samples.RSAPrivateKeyPem);
   }
)

Deno.test(
   `test ${samples.RSAPublicKeyPem}`,
   ()=>{
      const pem_string = pem(samples.RSAPublicKeyPem).publicKey("RSA");
      assertEquals(pem_string,samples.RSAPublicKeyPem);
   }
)

Deno.test(
   `test ${samples.ecPrivateKey}`,
   ()=>{
      const pem_string = pem(samples.ecPrivateKey).privateKey("EC");
      assertEquals(pem_string,samples.ecPrivateKey);
   }
)

