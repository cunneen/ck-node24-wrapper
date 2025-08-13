import path from "node:path";
import chilkat from "ck-node24-wrapper";

const CERTFILE = "SectigoPublicServerAuthenticationRootR46.p7c";
const __dirname = import.meta.dirname;

const cert = new chilkat.Cert();
// Load any type of certificate (.cer, .p7b, .pem, etc.) by calling LoadFromFile.
const success = cert.LoadFromFile(path.join(__dirname, CERTFILE));
if (success) {
  console.log(cert.ExportCertPem());
} else {
  console.error("failed to load cert");
}
