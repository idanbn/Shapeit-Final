import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
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
    if (mealTimeName == 'Breakfast') {
        // Add a new document in collection "users => current user id => breakfast => random key => meal data"
        await setDoc(doc(db, "users", auth.currentUser.uid, 'breakfast', meal.mealId), meal );
    }
    if (mealTimeName == 'Lunch') {
        await setDoc(doc(db, "users", auth.currentUser.uid, 'lunch', meal.mealId), meal);
    }
    if (mealTimeName == 'Dinner') {
        await setDoc(doc(db, "users", auth.currentUser.uid, 'dinner', meal.mealId), meal);
    }
}


const deleteMeal = async (mealTimeName, meal_doc_id) => {
    if (mealTimeName == 'Breakfast') {
        // delete a document in collection "users => current user id => breakfast => meal docoment key"
        await deleteDoc(doc(db, "users", auth.currentUser.uid, 'breakfast', meal_doc_id));

    }
    if (mealTimeName == 'Lunch') {
        await deleteDoc(doc(db, "users", auth.currentUser.uid, 'lunch', meal_doc_id));
    }
    if (mealTimeName == 'Dinner') {
        await deleteDoc(doc(db, "users", auth.currentUser.uid, 'dinner', meal_doc_id));
    }
}

export { fetchData, addMeal, deleteMeal }