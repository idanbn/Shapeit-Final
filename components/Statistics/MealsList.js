import { React, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import { useSelector, useDispatch } from 'react-redux'
import { addBreakfast, addLunch, addDinner, fetchMeals } from '../../redux/meals/action';

import { COLORS, icons, images } from '../../constants';

import { fetchData } from '../../FireBase/FireStore/action';

import AddNewMeal from './AddNewMeal';




const MealsList = (props) => {

    const { user_id, date, breakfast, lunch, dinner } = useSelector(state => state.mealsReducer);
    const dispatch = useDispatch();



    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = async () => {
        console.log(date);

        dispatch(fetchMeals(props.dataName))

        //dispatch(props.dataName === 'Breakfast' ? fetchMeals(mealsdata.meals,props.dataName) :  props.dataName  === 'Lunch' ? addLunch(mealsdata.meals) : addDinner(mealsdata.meals))
    }


    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.mealId}
                    data={props.dataName === 'Breakfast' ? breakfast : props.dataName === 'Lunch' ? lunch : dinner}
                    renderItem={renderMeals}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                />
            </View>

            <AddNewMeal name={props.dataName} MealId='243143' />
        </View>
    );
}



const renderMeals = ({ item }) => (
    <MealCard >

        <Image
            source={images.sushi}
            resizeMode='cover'
            style={{
                height: 55,
                width: 55,
                marginTop: 6,
                borderRadius: 14

            }}

        />

        <MealText name={item.meal_name} />

        <Image
            source={icons.down_arrow}
            resizeMode='contain'
            style={{
                height: 20,
                width: 20,
                tintColor: COLORS.icons,
                marginTop: 25,
                marginRight: 12

            }}

        />


    </MealCard>
);


const MealCard = (props) => (
    <View style={styles.mealCard}>
        <View style={styles.cardContent}>

            {props.children}

        </View>
    </View>
);


const MealText = (props) => {
    return (

        <View style={{ position: 'absolute', marginLeft: 66, marginTop: 10 }} >
            <Text style={styles.mealName}>{props.name}</Text>
            <Text style={styles.mealDetiels}>120 Protein • 140 Calories</Text>
        </View>


    );
};



export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        height: 250
    },
    mealCard: {
        backgroundColor: COLORS.border,
        paddingBottom: 10,
        marginVertical: 8,
        marginHorizontal: 24,
        borderRadius: 20,

    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    mealName: {
        fontSize: 20,
        fontWeight: '600',
        opacity: 0.8
    },
    mealDetiels: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 8,
        color: COLORS.icons,
        opacity: 0.9

    },
});

