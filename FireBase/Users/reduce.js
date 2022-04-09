import { app_config } from "../configuration/firebase-configartion";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getDatabase} from "firebase/database";


const auth = getAuth(app_config);
const firestore_db = getFirestore(app_config);
const rt_db = getDatabase(app_config);

export {auth, rt_db, firestore_db}