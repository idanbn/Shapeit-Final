import { React, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import HelloHeader from '../components/Home/Hello';
import DailyiInTake from '../components/Home/DailyiIntake';
import Category from '../components/Home/Category';
import PopularMeals from '../components/Home/PopularMeals';
import MealsDataS from '../components/Home/MealsDataS';


import { LocalCategorysdb, LocalMealsdb } from '../Localdbs';
import { MealsbyCategory } from '../API/FoodAPI';

const HomeScreen = ({ navigation }) => {

    const [categorysData, setCategoryData] = useState(LocalCategorysdb);
    const [popularMealsData, setPopularMealsData] = useState(LocalMealsdb);
    const [selectCategory, setSelectCategory] = useState('Noodles');

    const [isSelcted, setIsSelcted] = useState(false);
    const [selectMealData, setSelectMealData] = useState('');


    useEffect(() => {
        //PopularMealsData(selectCategory);

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

