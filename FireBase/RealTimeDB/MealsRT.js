
import { ref, set, onValue } from "firebase/database";
import { auth, rt_db } from "../Users/reduce";

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

function writeMealData(mealTimeName, mealId) {
    if (mealTimeName == 'Breakfast') {
        set(ref(rt_db, 'users/' + auth.currentUser.uid + '/meals/breakfast/' + uuidv4()), {
            mid: mealId,
            //breakfast: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },

        });
    }

    if (mealTimeName == 'Lunch') {
        set(ref(rt_db, 'users/' + auth.currentUser.uid + '/meals/lunch/' + uuidv4()), {
            mid: mealId,
            //breakfast: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },

        });
    }

    if (mealTimeName == 'Dinner') {
        set(ref(rt_db, 'users/' + auth.currentUser.uid + '/meals/dinner/' + uuidv4()), {
            mid: mealId,
            //breakfast: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },

        });
    }
}

function readMealData(uid) {

    const starCountRef = ref(rt_db, 'users/' + uid);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        // console.log(data.uid);

    });

}
export { writeMealData, readMealData }