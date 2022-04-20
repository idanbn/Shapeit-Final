import { deleteUser } from "firebase/auth";
import { doc, deleteDoc, getDocs, collection } from "firebase/firestore";
//import { adminAuth } from "../../NodeJS/adminConfiguration";

import { firestore_db } from "../Users/reduce";


const deleteUserById = async (id) => {
    const deleteCollection = async (uid, C_name) => {
        const usersRef = await getDocs(collection(firestore_db, "users", uid, C_name));
        usersRef.forEach(async (docc) => {
            // doc.data() is never undefined for query doc snapshots
            await deleteDoc(doc(firestore_db, "users", id, C_name, docc.id));
        });

    }

    deleteUser(id).then(() => {
        console.log("user deleted from auth");
    }).catch((error) => {
        console.log("error deleted from auth");

    });;


    deleteCollection(id, 'breakfast');
    deleteCollection(id, 'lunch');
    deleteCollection(id, 'dinner');

    await deleteDoc(doc(firestore_db, "users", id));



}

const getAllUsers = async () => {

    const usersSnapshot = await getDocs(collection(firestore_db, "users"));
    var usersData = [];

    usersSnapshot.forEach((docc) => {

        usersData.push(docc.data());
    });
    return usersData;

};

export { deleteUserById, getAllUsers };