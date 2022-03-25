import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { COLORS, icons } from '../../constants';

import { Userdb } from '../../Localdbs';

const DayNutritionalValues = () => {
    return (
        <View style={{ marginTop: 26, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 14, marginRight: 14 }}>

            <NutritionalValuesCard iconName={icons.protein} nutritionalValue={Userdb[0].nutritionalValues.protein} nutritionalName='Protein' />
            <NutritionalValuesCard iconName={icons.carbs} nutritionalValue={Userdb[0].nutritionalValues.carbs} nutritionalName='Carbs' />
            <NutritionalValuesCard iconName={icons.food} nutritionalValue={Userdb[0].nutritionalValues.fat} nutritionalName='Fat' />
            <NutritionalValuesCard iconName={icons.sugar} nutritionalValue={Userdb[0].nutritionalValues.sugar} nutritionalName='Sugar' />





        </View>
    );
}

const BorderCard = (props) => {
    return (
        <View style={styles.borderCard} >
            {props.children}
        </View>
    )
}

const Icon = (props) => {
    return (
        <Image
            source={props.name}
            resizeMode='contain'
            style={styles.borderIcon}


        />
    )
}

const NutritionalValuesCard = (props) => {
    return (
        <View>
            <BorderCard >

                <Icon name={props.iconName} />
                <Text style={styles.borderText}>{props.nutritionalValue}g</Text>

            </BorderCard>
            <Text style={styles.nutritionalNameText}>{props.nutritionalName}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    borderCard: {
        borderColor: COLORS.border,
        borderRadius: 24,
        borderWidth: 2,
        height: 120,
        width: 84,
        alignItems: 'center',

    },
    borderIcon: {
        height: 40,
        width: 40,
        marginTop: 14,
        opacity: 0.85,
        tintColor:COLORS.icons


    },
    borderText: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 18,
        opacity: 0.8

    },
    nutritionalNameText: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 8,
        alignSelf: 'center',
        opacity: 0.8

    }
})

export default DayNutritionalValues;
