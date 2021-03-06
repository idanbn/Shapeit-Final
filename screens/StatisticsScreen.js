import { React, useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';


import DayCalorieCircular from '../components/Statistics/DayCalorieCircular';
import Daynutritionalvalues from '../components/Statistics/DayNutritionalValues';
import MealsList from '../components/Statistics/MealsList';
import MealsListHeader from '../components/Statistics/MealsListHeader';

import DrawerNavigator from '../navigation/DrawerNavigator';

const StatisticsScreen = ({ navigation }) => {

    const [BreakfastSelcted, setBreakfastSelcted] = useState(false);
    const [LunchSelcted, setLunchSelcted] = useState(false);
    const [DinnerSelcted, setDinnerSelcted] = useState(false);


    useEffect(() => {

    }, [BreakfastSelcted, LunchSelcted, DinnerSelcted]);

    return (
        <View style={{ flex: 1 }}>

            <DrawerNavigator navigation={navigation} />


            <SafeAreaView style={styles.safearea} >
                <DayCalorieCircular navigation={navigation} />
                <Daynutritionalvalues />

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >

                    <View key='1'>
                        <MealsListHeader navigation={navigation} name='Breakfast' isSelect={BreakfastSelcted} IsSelectedHandler={setBreakfastSelcted} />
                        {BreakfastSelcted ? <MealsList dataName={'Breakfast'} /> : null}
                    </View>

                    <View key='2'>
                        <MealsListHeader navigation={navigation} name='Lunch' isSelect={LunchSelcted} IsSelectedHandler={setLunchSelcted} />
                        {LunchSelcted ? <MealsList dataName={'Lunch'} /> : null}
                    </View>

                    <View key='3'>
                        <MealsListHeader navigation={navigation} name='Dinner' isSelect={DinnerSelcted} IsSelectedHandler={setDinnerSelcted} />
                        {DinnerSelcted ? <MealsList dataName={'Dinner'} /> : null}
                    </View>

                </ScrollView>

            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#eff5f5'
    },
})




export default StatisticsScreen;
