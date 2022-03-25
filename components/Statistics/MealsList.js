import { React, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { COLORS, icons, images } from '../../constants';

import { fetchData } from '../../FireBase/FireStore/action';



const MealsList = () => {

    const [meals, setMeals] = useState(new Array());

    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = async () => {
        const mealsdata = await fetchData();
        setMeals(mealsdata.meals)
    }

    

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.mealId}
                data={meals}
                renderItem={renderMeals}
                showsVerticalScrollIndicator={false}
            />
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
                borderRadius:14

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
                marginRight:12

            }}

        />


    </MealCard>
);


const MealCard = (props ) => (
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
        flex:1,
        marginTop:10
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
    },
    mealDetiels: {
        fontSize: 16,
        fontWeight:'400',
        marginTop:8
    },
});

