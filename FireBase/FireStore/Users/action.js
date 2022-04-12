import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { auth } from "../../Users/reduce";
import { firestore_db } from "../../Users/reduce";

const getUserById = async (userId) => {
    let userInfo = null;
    let nutrionalvalues = null;

    const userSnapshot = await getDocs(collection(firestore_db, "users"));
    const nutrionSnapshot = await getDocs(collection(firestore_db, "users", userId, "nutrionalvalues"));

    userSnapshot.forEach((doc) => {
        if (doc.id == userId) {

            nutrionSnapshot.forEach((docc) => {
                nutrionalvalues = docc.data()

            });

            const userData = {
                uid: doc.id,
                name: doc.data().name,
                activeBMR: doc.data().activeBMR,
                dailyCalorie: doc.data().dailyCalorie,
                isAdmin: doc.data().isAdmin,
                nutrionalvalues: nutrionalvalues

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

const updatedailyCalorie = async (calorie, nutrionalValues) => {

    console.log(userData)

    await setDoc(doc(firestore_db, "users", userId), {
        dailyCalorie: calorie,
        nutrionalvalues: {
            protein: nutrionalValues.protein,
            carbs: nutrionalValues.carbs,
            fat: nutrionalValues.fat,
            sugar: nutrionalValues.sugar,
        },
    });
};


export { getUserById, createUser };