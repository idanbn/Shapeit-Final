import { app_config } from "../../configuration/firebase-configartion";
import { getFirestore } from "firebase/firestore"



export const db = getFirestore(app_config);