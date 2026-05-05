const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());
const crypto = require('crypto');

let rawKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
if (rawKey) {
  rawKey = rawKey.replace(/^"|"$/g, '');
  rawKey = rawKey.replace(/\\n/g, '\n');
}

try {
  const key = crypto.createPrivateKey(rawKey);
  console.log("Success! Key type:", key.type);
} catch (e) {
  console.log("Failed to load as is:", e.message);
}

// Try the fallback logic I wrote
let privateKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
if (privateKey) {
  privateKey = privateKey.replace(/^"|"$/g, '');
  const beginMarker = '-----BEGIN PRIVATE KEY-----';
  const endMarker = '-----END PRIVATE KEY-----';
  
  if (privateKey.includes(beginMarker) && privateKey.includes(endMarker)) {
    let keyBody = privateKey.substring(
      privateKey.indexOf(beginMarker) + beginMarker.length,
      privateKey.indexOf(endMarker)
    );
    keyBody = keyBody.replace(/\\n/g, '').replace(/\s+/g, '');
    const chunks = keyBody.match(/.{1,64}/g) || [];
    privateKey = `${beginMarker}\n${chunks.join('\n')}\n${endMarker}\n`;
  }
}

try {
  const key2 = crypto.createPrivateKey(privateKey);
  console.log("Success with fallback! Key type:", key2.type);
} catch (e) {
  console.log("Failed with fallback:", e.message);
}
