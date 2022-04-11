import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./reduce";
import { auth } from '../Users/reduce';

const fetchData = async (mealTimeName) => {
    const meals = new Array();

    const mealsSnapshot = await getDocs(collection(db, "users", auth.currentUser.uid, mealTimeName.toLowerCase()));

    mealsSnapshot.forEach((doc) => {
        let mealdata = doc.data();
        mealdata.mealId = doc.id;
        meals.push(mealdata);
    })

    return { meals }

}


const addMeal = async (mealTimeName, meal) => {
    const random_key = uuidv4();
    if (mealTimeName == 'Breakfast') {
        // Add a new document in collection "users => current user id => breakfast => random key => meal data"
        await setDoc(doc(db, "users", auth.currentUser.uid, 'breakfast', random_key), meal);
    }
    if (mealTimeName == 'Lunch') {
        await setDoc(doc(db, "users", auth.currentUser.uid, 'lunch', random_key), meal);
    }
    if (mealTimeName == 'Dinner') {
        await setDoc(doc(db, "users", auth.currentUser.uid, 'dinner', random_key),meal);
    }
}

export { fetchData, addMeal }