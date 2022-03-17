import { app_config } from "../configuration/firebase-configartion";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const auth = getAuth(app_config);
const db = getFirestore(app_config);

export {auth}