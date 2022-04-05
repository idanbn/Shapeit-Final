import { React, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import { COLORS, icons, images } from '../../constants';

import { fetchData } from '../../FireBase/FireStore/action';



const MealsList = (props) => {

    const [meals, setMeals] = useState(new Array());

    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = async () => {
        const mealsdata = await fetchData();
        setMeals(mealsdata.meals)
    }



    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.mealId}
                    data={meals}
                    renderItem={renderMeals}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                />
            </View>

            <AddNewMeal />
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

const AddNewMeal = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.border,
                paddingBottom: 10,
                marginVertical: 8,
                marginHorizontal: 24,
                borderRadius: 14,
                width: 150,
                alignSelf: 'center',
                alignItems: 'center',
            }}
            activeOpacity={0.7}
            >

            <View
                style={{ flexDirection: 'row'}}
            >
                <Text style={{ paddingTop: 11 }}> Add Meal</Text>
                <Entypo
                    name='add-to-list'
                    style={{
                        fontSize:22,
                        fontWeight:'500',
                        color:COLORS.icons,
                        paddingTop: 7,
                        paddingLeft:10

                    }}
                />
            </View>

        </TouchableOpacity>
    );
}


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

