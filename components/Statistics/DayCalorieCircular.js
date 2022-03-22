import { React, useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg from 'react-native-svg';
import { COLORS } from '../../constants';

const DayCalorieCircular = () => {

    const [dayCalorie, setDayCalorie] = useState(1725);
    const [maxCalorie, setMaxCalorie] = useState(2500);
    const [fill, setFill] = useState(2052);

    useEffect(() => {
        CalcFill()

    }, [dayCalorie]);


    const CalcFill = () => {
        setFill(Math.round((100 * dayCalorie) / maxCalorie))
    }




    return (
        <View>
            <Text style={{ alignSelf: 'center', fontSize: 26, fontWeight: '700', marginTop: 10 }} > Activity </Text>

            <DraweCircular fill={fill} max_calorie={maxCalorie} >

                <TextCircular max_calorie={maxCalorie} day_calorie={dayCalorie} />

            </DraweCircular>

        </View>


    );
}


const DraweCircular = (props) => {

    return (

        <View style={{ position: 'relative', alignItems: 'center', marginTop: 26 }}>

            <View style={styles.circularContent} >
                {props.children}
            </View>

            <AnimatedCircularProgress
                size={200}
                width={18}
                backgroundWidth={16}
                fill={props.fill}
                tintColor={COLORS.icons}
                tintColorSecondary={COLORS.card}
                backgroundColor={COLORS.border}
                arcSweepAngle={240}
                rotation={240}
                lineCap='round'
            />
            <CircularField max_calorie={props.max_calorie} />

        </View>

    )

}

const TextCircular = (props) => {

    return (
        <View>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.calorieText}>{props.day_calorie}</Text>
                    <Text style={styles.kcalText}> Kcal </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.lastText}> of {props.max_calorie} </Text>
                </View>
            </View>

        </View>
    )

}

const CircularField = (props) => {

    return (
        <View style={{ position: 'absolute', marginTop: 170 }}>

            <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                <Text style={[styles.lastText, { marginRight: 10 }]} > 0 Kcal </Text>
                <Text style={[styles.lastText, { marginLeft: 75 }]} > {props.max_calorie} Kcal </Text>
            </View>

        </View>
    )

}



const styles = StyleSheet.create({
    conteiner: {
        marginTop: 30

    },
    calorieText: {
        fontSize: 30,
        marginTop: 70,
        fontWeight: '700'

    },
    kcalText: {
        fontSize: 15,
        marginTop: 82,
        fontWeight: '700'

    },
    circularContent: {
        position: 'absolute'

    },
    lastText: {
        fontSize: 18,
        fontWeight: '400'

    },

})

export default DayCalorieCircular;
