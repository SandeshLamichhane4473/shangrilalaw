// setAdmin.js
const admin = require('firebase-admin');

// Path to your Firebase service account JSON
const serviceAccount = require('../secret/serviceAccountKey.json');
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Map of roles to UIDs
 

// List of UIDs to be made admins
const adminUIDs = [
  'BrokrOVtM7bQEE1QmStm4kxaKBw1',
];

async function setAdminClaims() {
  for (const uid of adminUIDs) {
    try {
      await admin.auth().setCustomUserClaims(uid, { admin: true });
      console.log(`✅ Set admin for UID: ${uid}`);
    } catch (err) {
      console.error(`❌ Failed for UID ${uid}:`, err);
    }
  }
}

setAdminClaims();

 
