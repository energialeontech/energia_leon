const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());

let rawKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
const beginMarker = '-----BEGIN PRIVATE KEY-----';
const endMarker = '-----END PRIVATE KEY-----';
let keyBody = rawKey.substring(
    rawKey.indexOf(beginMarker) + beginMarker.length,
    rawKey.indexOf(endMarker)
);

const lines = keyBody.split('\n');
console.log('Number of lines:', lines.length);

lines.forEach((line, index) => {
    if (line !== '') {
        console.log(`Line ${index} length: ${line.length}`);
        if (line.length !== 64 && index !== lines.length - 1 && index !== 1) {
            console.log(`*** SHORT LINE: ${line}`);
        }
    }
});
