import { React, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Userdb } from '../../Localdbs';

import { COLORS, icons } from '../../constants';

const DayCalorieCircular = ({ navigation }) => {

    const [dayCalorie, setDayCalorie] = useState(Userdb[0].calorie);
    const [maxCalorie, setMaxCalorie] = useState(Userdb[0].active_BMR);
    const [fill, setFill] = useState(2052);

    useEffect(() => {
        CalcFill()

    }, [dayCalorie]);


    const CalcFill = () => {
        setFill(Math.round((100 * dayCalorie) / maxCalorie))
    }




    return (
        <View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10  }}>
                    <Text style={{ fontSize: 26, fontWeight: '700' }} > Activity </Text>
                </View>

                <TouchableOpacity
                    style={{ position:'absolute', alignSelf: 'flex-end', width: 50, marginTop:10 }}
                    onPress={() => navigation.navigate('userInfo')}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 32,
                            height: 32,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

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
