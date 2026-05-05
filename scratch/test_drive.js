const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());

const { google } = require('googleapis');
const { Readable } = require('stream');

async function testDrive() {
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

    console.log("Extracted Email:", process.env.GOOGLE_DRIVE_CLIENT_EMAIL);
    console.log("Key format valid?:", privateKey.startsWith('-----BEGIN PRIVATE KEY-----\n') && privateKey.endsWith('\n-----END PRIVATE KEY-----\n'));

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });

    const drive = google.drive({ version: 'v3', auth });

    try {
        const fileMetadata = {
            name: 'Test_Connection.txt',
            parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
        };
        const stream = new Readable();
        stream.push(Buffer.from('Hello World test test'));
        stream.push(null);
        
        const media = {
            mimeType: 'text/plain',
            body: stream,
        };

        const file = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id, webViewLink',
        });
        
        console.log('Success! Link:', file.data.webViewLink);
    } catch(err) {
        console.error('FAILED:', err);
    }
}
testDrive();
