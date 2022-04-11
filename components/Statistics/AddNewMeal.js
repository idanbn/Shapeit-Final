import { React } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import { useDispatch } from 'react-redux'
import { addBreakfast, addLunch, addDinner } from '../../redux/meals/action';

import { COLORS } from '../../constants';



const AddNewMeal = (props) => {

    const dispatch = useDispatch();
    const data = {
        mid: props.MealId,
        calorie_level: "22",
        meal_name: "tost",
    }

    const selectDispatch = () => {
        const random_key = uuidv4();

        if (props.name == 'Breakfast')
            dispatch(addBreakfast({...data,  mealId:random_key}));
        if (props.name == 'Lunch')
            dispatch(addLunch({...data,  mealId:random_key}));
        if (props.name == 'Dinner')
            dispatch(addDinner({...data,  mealId:random_key}));

    }




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
            onPress={selectDispatch}
        >

            <View
                style={{ flexDirection: 'row' }}
            >
                <Text style={{ paddingTop: 11 }}> Add Meal</Text>
                <Entypo
                    name='add-to-list'
                    style={{
                        fontSize: 22,
                        fontWeight: '500',
                        color: COLORS.icons,
                        paddingTop: 7,
                        paddingLeft: 10

                    }}
                />
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default AddNewMeal;
