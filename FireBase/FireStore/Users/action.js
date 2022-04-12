import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { auth } from "../../Users/reduce";
import { db } from "../reduce";

const getUserById = async (userId) => {
    let userInfo = '';

    const mealsSnapshot = await getDocs(collection(db, "users"));

    mealsSnapshot.forEach((doc) => {
        if (doc.id == userId) {

            let userData = {
                uid: doc.id,
                name: doc.data().name,
                activeBMR: doc.data().activeBMR,
                dailyCalorie: doc.data().dailyCalorie,
                isAdmin: doc.data().isAdmin,
            }
            userInfo = userData;
        }

    })

    return { userInfo }

}

const createUser = async (userId, userData) => {

    console.log(userData)

    await setDoc(doc(db, "users", userId), userData);
}

export { getUserById, createUser }