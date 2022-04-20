
import { getAuth } from "firebase/auth";
 
 var admin = require("firebase-admin");


var serviceAccount = require("./sahpeit-db-firebase-adminsdk-2fcej-172a65395e.json");

const admininitialize = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sahpeit-db-default-rtdb.europe-west1.firebasedatabase.app"
}

export const admin_config = admin.initializeApp(admininitialize);

console.log(admin_config);

export const adminAuth = getAuth(admin_config);
