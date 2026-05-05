const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());

async function check() {
    let privateKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
    privateKey = privateKey.replace(/^"|"$/g, '');
    const beginMarker = '-----BEGIN PRIVATE KEY-----';
    const endMarker = '-----END PRIVATE KEY-----';
    let keyBody = privateKey.substring(
        privateKey.indexOf(beginMarker) + beginMarker.length,
        privateKey.indexOf(endMarker)
    );
    keyBody = keyBody.replace(/\\n/g, '').replace(/\s+/g, '');
    
    console.log("Body length:", keyBody.length);
    console.log("Is valid Base64?:", /^[A-Za-z0-9+/]+={0,2}$/.test(keyBody));
    
    try {
        const decoded = Buffer.from(keyBody, 'base64').toString('hex');
        console.log("Decodes successfully, starts with:", decoded.substring(0, 20));
    } catch(e) {
        console.log("Base64 decode error:", e);
    }
}
check();
