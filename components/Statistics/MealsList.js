import { React, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useSelector, useDispatch } from 'react-redux'
import { fetchMeals, removeMeal } from '../../redux/meals/action';

import { COLORS, icons } from '../../constants';

import { updateNegativeUserDailyCalorie } from '../../redux/users/action';




const MealsList = (props) => {

    const { date, breakfast, lunch, dinner } = useSelector(state => state.mealsReducer);
    const { currentUser } = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchMeals(props.dataName))
    }, []);


    const renderMeals = ({ item }) => (
        <MealCard >
            <Image
                source={{ uri: item.image }}
                resizeMode='cover'
                style={{
                    height: 55,
                    width: 55,
                    marginTop: 6,
                    borderRadius: 14

                }}

            />

            <MealText data={item} />
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    let nutrionalvalues = {
                        protein: item.protein,
                        carbs: item.carbs,
                        fat: item.fat,
                        sugar: item.sugar
                    }
                    dispatch(updateNegativeUserDailyCalorie(currentUser.userInfo.uid, item.calories, nutrionalvalues))
                    dispatch(removeMeal(props.dataName, item.mealId))
                }}
            >

                <MaterialCommunityIcons
                    name='delete'
                    size={26}
                    color={COLORS.icons}
                    style={{
                        marginTop: 25,
                        marginRight: 12
                    }}
                />

            </TouchableOpacity>


        </MealCard>
    );


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

        </View>
    );
}


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
            <Text numberOfLines={1} style={styles.mealName}>{props.data.meal_name}</Text>
            <Text style={styles.mealDetiels}>{props.data.protein | 0}g Protein • {props.data.calories | 0} Calories</Text>
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
        fontSize: 18,
        fontWeight: '600',
        opacity: 0.8,
        width: '60%',

    },
    mealDetiels: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 8,
        color: COLORS.icons,
        opacity: 0.9

    },
});

