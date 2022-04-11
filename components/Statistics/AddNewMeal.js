import { React } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import { useSelector, useDispatch } from 'react-redux'
import { addBreakfast, addLunch, addDinner, fetchMeals } from '../../redux/meals/action';

import { COLORS } from '../../constants';



const AddNewMeal = (props) => {
    const mealId = 'mealId';
    const dispatch = useDispatch();

    const selectDispatch = () => {
        if (props.name == 'Breakfast')
            dispatch(addBreakfast(mealId));
        if (props.name == 'Lunch')
            dispatch(addLunch(mealId));
        if (props.name == 'Dinner')
            dispatch(addDinner(mealId));

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
