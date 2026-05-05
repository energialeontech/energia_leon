const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());
const { google } = require('googleapis');
const crypto = require('crypto');

async function check() {
    let rawKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
    // La forma estándar documentada por Google:
    const keyStr = rawKey.replace(/\\n/g, '\n').replace(/"/g, '');
    
    console.log("Starts with:", keyStr.substring(0, 30));
    console.log("Ends with:", keyStr.substring(keyStr.length - 30));
    console.log("Contains spaces?", keyStr.includes(' '));
    
    // Test OpenSSL crypto signing directly:
    try {
        const sign = crypto.createSign('RSA-SHA256');
        sign.update('test data');
        const signature = sign.sign(keyStr, 'base64');
        console.log("Crypto sign successful!");
    } catch(err) {
        console.error("Crypto sign FAILED:", err.message);
    }
}
check();
