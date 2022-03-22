import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'

const DayNutritionalValues = () => {
    return (
        <View style={{marginTop:26, flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginLeft:14,marginRight:14}}>
            
            <NutritionalValuesCard iconName='pizza-outline' nutritionalValue='864' nutritionalName='Protein' />
            <NutritionalValuesCard iconName='pizza-outline' nutritionalValue='60' nutritionalName='Carbs' />
            <NutritionalValuesCard iconName='pizza-outline' nutritionalValue='126' nutritionalName='Fat' />
            <NutritionalValuesCard iconName='pizza-outline' nutritionalValue='542' nutritionalName='Fat' />





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
        <Ionicons
            name={props.name}
            color={COLORS.icons}
            style={styles.borderIcon}


        />
    )
}

const NutritionalValuesCard = (props) => {
    return (
        <View style={{marginLeft: 0 ,}}>
        <BorderCard >

            <Icon name={props.iconName} />

            <Text style={styles.borderText}>{props.nutritionalValue}g</Text>


        </BorderCard>

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
        fontSize: 48,
        transform: [{ rotate: '45deg' }],
        marginTop: 18,
        opacity:0.65

    },
    borderText: {
        fontSize: 22,
        fontWeight:'500',
        marginTop:8,
        opacity:0.8

    }
})

export default DayNutritionalValues;
