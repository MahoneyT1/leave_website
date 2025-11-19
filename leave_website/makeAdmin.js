import admin from "firebase-admin";
import fs from "fs";

// Load serviceAccountKey.json
const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 🔥 Replace this with the user's UID
const uid = "09XT6nl0UsYcMtNLUwo5RiGSgU42";

async function setAdmin() {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log("Admin claim set!");
  } catch (err) {
    console.error(err);
  }
}

setAdmin();