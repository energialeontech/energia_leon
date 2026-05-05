const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());

let rawKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
rawKey = rawKey.replace(/^"|"$/g, '');
const beginMarker = '-----BEGIN PRIVATE KEY-----';
const endMarker = '-----END PRIVATE KEY-----';
let keyBody = rawKey.substring(
    rawKey.indexOf(beginMarker) + beginMarker.length,
    rawKey.indexOf(endMarker)
);
const lines = keyBody.split('\\n');
lines.forEach((l, i) => {
    if (l.trim().length > 0) {
        console.log(`Line ${i}: length ${l.length}`);
    }
});
