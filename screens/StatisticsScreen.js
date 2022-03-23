import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import DayCalorieCircular from '../components/Statistics/DayCalorieCircular';
import Daynutritionalvalues from '../components/Statistics/DayNutritionalValues';

const StatisticsScreen = ({route}) => {
    return (
        <SafeAreaView style={styles.safearea} >
            <DayCalorieCircular />
            <Daynutritionalvalues />


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
