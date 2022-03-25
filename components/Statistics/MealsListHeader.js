import { React, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { COLORS, icons } from '../../constants';


const MealsListHeader = ({ navigation, isSelect, IsSelectedHandler, ...props }) => {



    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 28 }}>
            <Text style={{ fontSize: 24, fontWeight: '700', color: 'black' }}> {props.name} </Text>
            <TodayButton navigation={navigation} isSelect={isSelect} IsSelectedHandler={IsSelectedHandler} />
        </View>
    );
}


const TodayButton = ({ navigation, ...props }) => {


    const updateSelected = () => {

        props.IsSelectedHandler(previousState => !props.isSelect)

    };

    return (
        <TouchableOpacity
            /*{onPress={() => navigation.navigate('mealsScreen')}}*/
            onPress={updateSelected}
            style={{
                flexDirection: 'row',
                marginTop: 2
            }}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: COLORS.icons, }}> Today </Text>
            <Image
                source={icons.down_arrow}
                resizeMode='contain'
                style={{
                    height: 15,
                    width: 15,
                    tintColor: COLORS.icons,
                    marginTop: 4,

                }}

            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default MealsListHeader;
