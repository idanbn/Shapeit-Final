import { collection, getDocs } from "firebase/firestore";
import { db } from "./reduce";

const fetchData = async () => {
    const meals = new Array();
    const mealsSnapshot = await getDocs(collection(db, "meals"));

    mealsSnapshot.forEach((doc) => {
        let mealdata = doc.data();
        mealdata.mealId = doc.id;
        meals.push(mealdata);
    })

    return { meals }

}


function addMeal(mid) {


}

export { fetchData }