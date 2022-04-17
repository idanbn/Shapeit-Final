import { React } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as Animatable from 'react-native-animatable';


import { useDispatch } from 'react-redux'
import { addBreakfast, addLunch, addDinner } from '../../redux/meals/action';

import { COLORS } from '../../constants';
import { MealInformation } from '../../API/FoodAPI';
import { auth } from '../../FireBase/Users/reduce';
import { updateUserDailyCalorie } from '../../redux/users/action';



const AddNewMeal = (props) => {

    const dispatch = useDispatch();
    let data = null;

    const selectDispatch = async () => {
        const random_key = uuidv4();
        if (props.MealId === parseInt(props.MealId, 10)) {
            const mealInfo = await MealInformation(props.MealId);

            data = {
                mid: props.MealId,
                meal_name: mealInfo.title,
                image: mealInfo.image,

                protein: mealInfo.nutrition.nutrients.filter(obj => obj.name == 'Protein')[0].amount,
                sugar: mealInfo.nutrition.nutrients.filter(obj => obj.name == 'Sugar')[0].amount,
                fat: mealInfo.nutrition.nutrients.filter(obj => obj.name == 'Fat')[0].amount,
                carbs: mealInfo.nutrition.nutrients.filter(obj => obj.name == 'Carbohydrates')[0].amount,
                calories: mealInfo.nutrition.nutrients.filter(obj => obj.name == 'Calories')[0].amount,

            }
        }
        else {
            data = {
                mid: props.MealId.id,
                meal_name: props.MealId.title,
                image: props.MealId.image,

                protein: props.MealId.nutrition.nutrients.filter(obj => obj.name == 'Protein')[0].amount,
                sugar: props.MealId.nutrition.nutrients.filter(obj => obj.name == 'Sugar')[0].amount,
                fat: props.MealId.nutrition.nutrients.filter(obj => obj.name == 'Fat')[0].amount,
                carbs: props.MealId.nutrition.nutrients.filter(obj => obj.name == 'Carbohydrates')[0].amount,
                calories: props.MealId.nutrition.nutrients.filter(obj => obj.name == 'Calories')[0].amount,

            }
        }

        dispatch(updateUserDailyCalorie(auth.currentUser.uid, data.calories, {
            protein: data.protein,
            carbs: data.carbs,
            fat: data.fat,
            sugar: data.sugar,
        }));

        if (props.name == 'Breakfast')
            dispatch(addBreakfast({ ...data, mealId: random_key }));
        if (props.name == 'Lunch')
            dispatch(addLunch({ ...data, mealId: random_key }));
        if (props.name == 'Dinner')
            dispatch(addDinner({ ...data, mealId: random_key }));

        props.setAddMealselected(false);

    }


    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.border,
                paddingBottom: 10,
                paddingHorizontal: 10,
                marginVertical: 8,
                borderRadius: 14,
                width: '100%',
            }}
            activeOpacity={0.7}
            onPress={selectDispatch}
        >

            <View
                style={{ flexDirection: 'row',justifyContent: "space-between"}}
            >
                <Text style={{ paddingTop: 11, fontWeight: '600', fontSize: 16 }}> Add {props.name}</Text>
                <Entypo
                    name='add-to-list'
                    style={{
                        fontSize: 22,
                        fontWeight: '500',
                        color: COLORS.icons,
                        paddingTop: 7,
                        paddingLeft: 26

                    }}
                />
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default AddNewMeal;
