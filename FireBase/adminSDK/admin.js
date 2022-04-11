

import { auth } from "../Users/reduce";


const ttid = () => {

    console.log('testtttttttttt');

    //const firebaseadmin = require("firebase-admin");

    //const { initializeApp } = require("firebase-admin/app");

    const serviceAccount = require("./sahpeit-db-firebase-adminsdk-2fcej-4bf062e48d.json");
/*
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://sahpeit-db-default-rtdb.europe-west1.firebasedatabase.app"
    });


    admin.auth().createCustomToken('test-uid', { premiumAccount: true })
        .then((customToken) => {
            console.log(customToken);
        })
        .catch((error) => {
            console.log('Error creating custom token: ', error)
        })
*/

}

export { ttid }