import { React } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../FireBase/FireStore/reduce';
import { COLORS } from '../constants';
import { async } from '@firebase/util';

import HelloHeader from '../components/Home/Hello';
import DailyiInTake from '../components/Home/DailyiIntake';
import Category from '../components/Home/Category';

const TestScreen = () => {

    const SetData = async () => {
        // Add a new document in collection "meals"
        await setDoc(doc(db, "meals", "random_doc"), {
            meal_name: "steak",
            calorie_level: "0",
        });

    }

    //ScreenShot26

    return (
        <SafeAreaView style={styles.safearea}>

            <HelloHeader />
            <DailyiInTake />
            <Category />


        </SafeAreaView>
    );
}
export default TestScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: COLORS.lightGray3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },

});

