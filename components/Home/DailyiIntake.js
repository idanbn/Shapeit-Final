import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, images } from '../../constants';

const DailyiInTake = () => {
    return (
        <View style={styles.continer}>
            <TouchableOpacity activeOpacity={0.9} >
                <Card >
                    <View style={{ flexDirection: 'row' }}>
                        <CardTexts />
                        <Image
                            source={images.avatar_3}
                            resizeMode='contain'
                            style={{
                                width: 150,
                                height: 200,
                                transform: [{ rotate: '-1deg' }],
                                marginHorizontal:10,
                                marginTop:-40,
                                
                            }}
                        />
                    </View>
                </Card>

            </TouchableOpacity>
        </View>
    );
};

const ValueAndName = (props) => {
    return (
        <View>
            <Text style={styles.valueNum}> {props.value}{<Text style={styles.valueText}>{props.g_cal}</Text>}</Text>
            <Text style={styles.lastText}> {props.name} </Text>
        </View>
    );
};

const CardTexts = (props) => {
    return (
        <View>
            <Text style={styles.firstText}> Feeling Better! </Text>
            <Text style={styles.secondText}> Keep you healty life with </Text>
            <Text style={styles.secondText}> healty food </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 190 }}>
                <ValueAndName name='Protein' value='421' g_cal='g' />
                <ValueAndName name='Calories' value='1052' g_cal='kcal' />

            </View>
        </View>
    );
};

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    continer: {
        backgroundColor: '#eff5f5',
        paddingTop: 20,
    },

    card: {
        backgroundColor: COLORS.card,
        marginHorizontal: 25,
        marginVertical: 3,
        borderRadius: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 180,
    },
    cardContent: {
        marginVertical: 20,
        marginHorizontal: 20,

    },
    firstText: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.white,
    },
    secondText: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.lightGreen,
        marginTop: 6,
    },
    valueNum: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.white,
        marginTop: 16,


    },
    valueText: {
        fontSize: 13,


    },
    lastText: {
        fontSize: 14,
        color: COLORS.lightGreen,
        marginHorizontal: 3,
    },

})

export default DailyiInTake;
