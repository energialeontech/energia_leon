const fs = require('fs');
const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());

let rawKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
const keyStr = rawKey.replace(/\\n/g, '\n').replace(/"/g, '');

fs.writeFileSync('scratch/key.pem', keyStr);
console.log('Wrote to scratch/key.pem');
