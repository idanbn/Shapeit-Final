import { React } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../FireBase/FireStore/reduce';
import { COLORS } from '../constants';
import { async } from '@firebase/util';

import HelloHeader from '../components/Home/Hello';
import DailyiInTake from '../components/Home/DailyiIntake';
import Category from '../components/Home/Category';
import PopularMeals from '../components/Home/PopularMeals';

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
            <PopularMeals />

        </SafeAreaView>
    );
}
export default TestScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#eff5f5'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

