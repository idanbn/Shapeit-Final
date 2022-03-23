import { React, useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../FireBase/FireStore/reduce';
import { COLORS } from '../constants';
import { async } from '@firebase/util';

import HelloHeader from '../components/Home/Hello';
import DailyiInTake from '../components/Home/DailyiIntake';
import Category, { LocalCategorydb } from '../components/Home/Category';
import PopularMeals, { LocalMealsdb } from '../components/Home/PopularMeals';

const HomeScreen = () => {

    const SetData = async () => {
        // Add a new document in collection "meals"
        await setDoc(doc(db, "meals", "random_doc"), {
            meal_name: "steak",
            calorie_level: "0",
        });

    }

    //ScreenShot26

    const [categorysData, setCategoryData] = useState(LocalCategorydb);
    const [popularMealsData, setPopularMealsData] = useState(LocalMealsdb);
    const [selectCategory, setSelectCategory] = useState('meat');


    useEffect(() => {
        PopularMealsData();

    }, [selectCategory]);


    const PopularMealsData = () => {

        let result = categorysData.filter(t => t.text === selectCategory)
        .map((categoryMeals) => {return categoryMeals.categoryMeals});

        setPopularMealsData(result[0]);


    }


    return (
        <SafeAreaView style={styles.safearea}>

            <HelloHeader />
            <DailyiInTake />
            <Category categoryData={categorysData} selectCategory={selectCategory} selectCategoryHandler={setSelectCategory} />
            <PopularMeals Category={selectCategory} data={popularMealsData} />

        </SafeAreaView>
    );
}
export default HomeScreen;

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

