
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app_config } from "./configuration/firebase-configartion";
import { rt_db } from "./Users/reduce";


function writeUserData(userId, name, email, isadmin, bmr) {

    set(ref(rt_db, 'users/' + userId), {
        uid: userId,
        username: name,
        email: email,
        isadmin: isadmin,
        bmr: bmr,
        breakfast: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },
        lunch: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },
        dinner: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } }
    });
}

function readUserData(uid) {

    const starCountRef = ref(rt_db, 'users/' + uid);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        
       // console.log(data.uid);

    });

}
export { writeUserData, readUserData }