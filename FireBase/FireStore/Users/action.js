import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../Users/reduce";
import { firestore_db } from "../../Users/reduce";

const getUserById = async (userId) => {
    let userInfo = null;

    const userSnapshot = await getDocs(collection(firestore_db, "users"));

    userSnapshot.forEach((doc) => {
        if (doc.id == userId) {

            const userData = {
                uid: doc.id,
                name: doc.data().name,
                activeBMR: doc.data().activeBMR,
                dailyCalorie: doc.data().dailyCalorie,
                isAdmin: doc.data().isAdmin,
                nutrionalvalues: doc.data().nutrionalvalues

            };

            userInfo = userData;

        };

    });

    return { userInfo }

};

const createUser = async (userId, userData) => {

    console.log(userData);

    await setDoc(doc(firestore_db, "users", userId), userData);
};

const updateDailyCalorie = async (userId, calorie, nutrionalValues) => {

    const userdata = await getUserById(userId);

    await updateDoc(doc(firestore_db, "users", userId), {
        dailyCalorie: calorie + userdata.userInfo.dailyCalorie,
        nutrionalvalues: {
            protein: nutrionalValues.protein + userdata.userInfo.nutrionalvalues.protein,
            carbs: nutrionalValues.carbs + userdata.userInfo.nutrionalvalues.carbs,
            fat: nutrionalValues.fat + userdata.userInfo.nutrionalvalues.fat,
            sugar: nutrionalValues.sugar + userdata.userInfo.nutrionalvalues.sugar,
        },
    });

    return await getUserById(userId)
};


const updateNegativeDailyCalorie = async (userId, calorie, nutrionalValues) => {

    const userdata = await getUserById(userId);

    await updateDoc(doc(firestore_db, "users", userId), {
        dailyCalorie: userdata.userInfo.dailyCalorie - calorie,
        nutrionalvalues: {
            protein: userdata.userInfo.nutrionalvalues.protein - nutrionalValues.protein,
            carbs: userdata.userInfo.nutrionalvalues.carbs - nutrionalValues.carbs,
            fat: userdata.userInfo.nutrionalvalues.fat - nutrionalValues.fat,
            sugar: userdata.userInfo.nutrionalvalues.sugar - nutrionalValues.sugar,
        },
    });

    return await getUserById(userId)
};

export { getUserById, createUser, updateDailyCalorie, updateNegativeDailyCalorie };