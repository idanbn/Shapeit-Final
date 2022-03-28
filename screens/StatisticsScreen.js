import { React, useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Modal } from 'react-native';

import DayCalorieCircular from '../components/Statistics/DayCalorieCircular';
import Daynutritionalvalues from '../components/Statistics/DayNutritionalValues';
import MealsList from '../components/Statistics/MealsList';
import MealsListHeader from '../components/Statistics/MealsListHeader';

const StatisticsScreen = ({ navigation, route }) => {

    const [BreakfastSelcted, setBreakfastSelcted] = useState(false);
    const [LunchSelcted, setLunchSelcted] = useState(false);
    const [DinnerSelcted, setDinnerSelcted] = useState(false);


    useEffect(() => {



    }, [BreakfastSelcted, LunchSelcted, DinnerSelcted]);


    const selcetByTime = () => {
        var hours = new Date().getHours(); //Current Hours

        if (hours >= 6 || hours < 13)
            setBreakfastSelcted(true);
        else if (hours >= 13 || hours < 18)
            setLunchSelcted(true);
        else if (hours >= 18 || hours < 23)
            setDinnerSelcted(true);

    }

    return (
        <SafeAreaView style={styles.safearea} >
            <DayCalorieCircular />
            <Daynutritionalvalues />

            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>


                <MealsListHeader navigation={navigation} name='Breakfast' isSelect={BreakfastSelcted} IsSelectedHandler={setBreakfastSelcted} />
                {BreakfastSelcted ? <MealsList /> : null}

                <MealsListHeader navigation={navigation} name='Lunch' isSelect={LunchSelcted} IsSelectedHandler={setLunchSelcted} />
                {LunchSelcted ? <MealsList /> : null}


                <MealsListHeader navigation={navigation} name='Dinner' isSelect={DinnerSelcted} IsSelectedHandler={setDinnerSelcted} />
                {DinnerSelcted ? <MealsList /> : null}



            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#eff5f5'
    },
})




export default StatisticsScreen;
