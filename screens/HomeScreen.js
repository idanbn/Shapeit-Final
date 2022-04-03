import { React, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../FireBase/FireStore/reduce';
import { async } from '@firebase/util';

import HelloHeader from '../components/Home/Hello';
import DailyiInTake from '../components/Home/DailyiIntake';
import Category from '../components/Home/Category';
import PopularMeals from '../components/Home/PopularMeals';
import MealsDataS from '../components/Home/MealsDataS';


import { LocalCategorydb, LocalCategorysdb, LocalMealsdb } from '../Localdbs';
import { IngredientsByID, MealInformation, MealsbyCategory, NutritionByID } from '../API/FoodAPI';

const HomeScreen = ({ navigation }) => {

    const SetData = async () => {
        // Add a new document in collection "meals"
        await setDoc(doc(db, "meals", "random_doc"), {
            meal_name: "steak",
            calorie_level: "0",
        });

    }


    const [categorysData, setCategoryData] = useState(LocalCategorysdb);
    const [popularMealsData, setPopularMealsData] = useState(LocalMealsdb);
    const [selectCategory, setSelectCategory] = useState('Noodles');

    const [isSelcted, setIsSelcted] = useState(false);
    const [selectMealData, setSelectMealData] = useState('');


    useEffect(() => {
        PopularMealsData(selectCategory);

    }, [selectCategory]);



    const PopularMealsData = async (category) => {
        const mealsdata = await MealsbyCategory(category);
        setPopularMealsData(mealsdata);
    }



    return (
        <SafeAreaView style={styles.safearea}>

            <HelloHeader />
            <DailyiInTake navigation={navigation} />
            <Category categoryData={categorysData} selectCategory={selectCategory} selectCategoryHandler={setSelectCategory} />
            <PopularMeals data={popularMealsData} setModelSelcted={setIsSelcted} setSelectMealData={setSelectMealData} />
            <MealsDataS data={selectMealData} setModelSelcted={setIsSelcted} modelSelcted={isSelcted} />

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

