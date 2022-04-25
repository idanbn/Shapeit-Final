import { app_config } from "../configuration/firebase-configartion";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getDatabase} from "firebase/database";
import { getStorage } from "firebase/storage";


const auth = getAuth(app_config);
const firestore_db = getFirestore(app_config);
const rt_db = getDatabase(app_config);
const storage_db = getStorage(app_config);

export {auth, rt_db, firestore_db,storage_db}