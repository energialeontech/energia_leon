require('dotenv').config({path: '.env.local'});
console.log("Key:", JSON.stringify(process.env.GOOGLE_DRIVE_PRIVATE_KEY));
let pk = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
if (pk) {
    pk = pk.replace(/^"|"$/g, ''); 
    pk = pk.replace(/\\n/g, '\n');
    console.log("Processed:", JSON.stringify(pk));
}
