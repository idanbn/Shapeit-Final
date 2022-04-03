import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { COLORS, icons } from '../../constants';


const NutritionalValues = (props) => {
    return (
        <View style={{ marginTop: 26, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 14, marginRight: 14 }}>

            <NutritionalValuesCard iconName={icons.protein} nutritionalValue={props.data.filter(obj => obj.name == 'Protein')[0].amount } nutritionalunit={props.data.filter(obj => obj.name == 'Protein')[0].unit } nutritionalName='Protein' />
            <NutritionalValuesCard iconName={icons.carbs} nutritionalValue={props.data.filter(obj => obj.name == 'Carbohydrates')[0].amount } nutritionalunit={props.data.filter(obj => obj.name == 'Carbohydrates')[0].unit }  nutritionalName='Carbs' />
            <NutritionalValuesCard iconName={icons.food} nutritionalValue={props.data.filter(obj => obj.name == 'Fat')[0].amount } nutritionalunit={props.data.filter(obj => obj.name == 'Fat')[0].unit }  nutritionalName='Fat' />
            <NutritionalValuesCard iconName={icons.sugar} nutritionalValue={props.data.filter(obj => obj.name == 'Sugar')[0].amount } nutritionalunit={props.data.filter(obj => obj.name == 'Sugar')[0].unit }  nutritionalName='Sugar' />

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
                <Text style={styles.borderText}>{props.nutritionalValue | 0}{props.nutritionalunit}</Text>

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
        height: 108,
        width: 84,
        alignItems: 'center',

    },
    borderIcon: {
        height: 40,
        width: 40,
        marginTop: 14,
        opacity: 0.85,
        tintColor: COLORS.icons


    },
    borderText: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 9,
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

export default NutritionalValues;
