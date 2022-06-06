import { React, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable';

import { COLORS } from '../../constants';

import NutritionalValues from './NutritionalValues';
import SlideModel from './SlideModel';
import AddNewMeal from '../Statistics/AddNewMeal';
import appTheme from '../../constants/theme';

const MealsDataS = ({ ...props }) => {
    const [addMeal, setAddMeal] = useState(false);

    return (
        <>
        {props.modelSelcted?
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} setAddMealselected={setAddMeal} >
            {addMeal ?
                <SelectMealTime data={props.data} setAddMealselected={setAddMeal} />
                : null
            }
            <RenderTitele data={props.data} setAddMealselected={setAddMeal} />
            <NutritionalValues data={props.data.nutrition ? props.data.nutrition.nutrients : null} />
            <RenderIngredients data={props.data.extendedIngredients ? props.data.extendedIngredients : null} />

        </SlideModel>
        :
        null
        }
        </>
    );
}


const RenderTitele = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14, }}>
                <Text numberOfLines={2} style={{ fontSize: 28, fontWeight: '700', width: 300 }} >{props.data.title}</Text>

                <View key={props.data.id}>
                    <View style={{ flexDirection: 'row', marginTop: 6 }}>

                        <Fontisto
                            name='clock'
                            style={{
                                fontSize: 23,
                                color: COLORS.darkgray,
                                fontWeight: '600',
                                opacity: 0.92
                            }}
                        />
                        <Text style={{ fontSize: 19, fontWeight: '600', color: COLORS.darkgray, opacity: 0.92 }} >  {props.data.readyInMinutes} Min</Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.border,
                                paddingBottom: 10,
                                marginVertical: 8,
                                borderRadius: 14,
                                width: 100,
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity={0.7}
                            onPress={() => props.setAddMealselected(true)}
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
                                        paddingLeft: 8

                                    }}
                                />
                            </View>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            <Text numberOfLines={3} style={{ fontSize: 18, fontWeight: '500', color: COLORS.darkgray, opacity: 0.9, marginTop: 10, paddingHorizontal: 14 }} >{props.data.summary}</Text>
        </View>
    );

};

const SelectMealTime = (props) => {
    return (
        <Animatable.View
            animation="bounceIn"
            duration={2000}
            style={{
                position: 'absolute',
                marginTop: appTheme.SIZES.height / 6.5,
                zIndex: 999,
                backgroundColor: COLORS.card,
                borderRadius: 10,
                alignSelf: 'center',

            }}>
            <View
                style={{
                    padding: 20,
                    paddingHorizontal: 40,
                    alignItems: 'center',
                }}
            >
                <AddNewMeal MealId={props.data} name='Breakfast' setAddMealselected={props.setAddMealselected} />
                <AddNewMeal MealId={props.data} name='Lunch' setAddMealselected={props.setAddMealselected} />
                <AddNewMeal MealId={props.data} name='Dinner' setAddMealselected={props.setAddMealselected} />

            </View>
        </Animatable.View>

    );
};

const RenderIngredients = (props) => {
    return (
        <View style={{ marginTop: 14, paddingBottom: 100 }} >
            <Text style={{ fontSize: 22, fontWeight: '700', marginHorizontal: 19, marginBottom: 10, }} >Ingredients</Text>

            <View style={{ height: 180 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={props.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo
                                    name='dot-single'
                                    style={{
                                        fontSize: 44,
                                        color: COLORS.icons,
                                        fontWeight: '600',
                                        opacity: 0.98,
                                        marginLeft: 2,
                                        marginTop: -8
                                    }}
                                />

                                <Text style={{ fontSize: 21, fontWeight: '600', opacity: 0.9 }}>{item.name}</Text>
                            </View>

                            <Text style={{ fontSize: 19, fontWeight: '500', opacity: 0.9 }}>{item.amount} {item.unit}</Text>

                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MealsDataS;
