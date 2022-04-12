import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { auth } from "../../Users/reduce";
import { db } from "../reduce";

const getUserById = async (userId) => {
    const userInfo = new Array();

    const mealsSnapshot = await getDocs(collection(db, "users"));

    mealsSnapshot.forEach((doc) => {
        if (doc.id == userId) {


            console.log(doc.data());
            console.log(doc.id);

            let userData = {
                uid: userId,
                activeBMR: doc.data().bmr,
                dailyCalorie: doc.data().dailyCalorie,
                isAdmin: doc.data().isAdmin,
            }

        }

        //let mealdata = doc.data();
        //mealdata.mealId = doc.id;
        //meals.push(mealdata);
    })

    return { userInfo }

}

export {getUserById}