import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'

import { COLORS } from '../../constants';

import NutritionalValues from './NutritionalValues';
import SlideModel from './SlideModel';

const MealsDataS = ({ ...props }) => {
    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} >

            <RenderTitele data={props.data} />
            <NutritionalValues data={props.data.nutrition ? props.data.nutrition.nutrients : null} />
            <RenderIngredients data={props.data.extendedIngredients ? props.data.extendedIngredients : null} />


        </SlideModel>

    );
}

const RenderTitele = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14, }}>
                <Text numberOfLines={2} style={{ fontSize: 28, fontWeight: '700', width: 300 }} >{props.data.title}</Text>

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

            </View>

            <Text numberOfLines={3} style={{ fontSize: 18, fontWeight: '500', color: COLORS.darkgray, opacity: 0.9, marginTop: 10, paddingHorizontal: 14 }} >{props.data.summary}</Text>
        </View>
    );

};

const RenderIngredients = (props) => {
    return (
        <View style={{ marginTop: 14, paddingBottom:100 }} >
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

                                <Text style={{ fontSize: 21, fontWeight: '600', opacity: 0.8 }}>{item.name}</Text>
                            </View>

                            <Text style={{ fontSize: 20, fontWeight: '600', opacity: 0.94 }}>{item.amount} {item.unit}</Text>

                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MealsDataS;
