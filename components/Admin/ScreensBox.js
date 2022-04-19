
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import appTheme from '../../constants/theme';
import { COLORS } from '../../constants';




const ScreensBox = (props) => {
    return (
        <View style={styles.screenBox}>

            <ScreenCard name={'Permission'} setModalVisible={props.setPremModalVisible} setModalInVisible={props.setUserModalVisible} />
            <ScreenCard name={'Users'} setModalVisible={props.setUserModalVisible} setModalInVisible={props.setPremModalVisible} />

        </View>


    );
};

const ScreenCard = (props) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => { props.setModalVisible(true); props.setModalInVisible(false) }}
        >
            <View style={styles.cardContant}>
                <Text style={styles.cardText}>Management {props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default ScreensBox;

const styles = StyleSheet.create({

    screenBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    card: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 10,
        paddingHorizontal: appTheme.SIZES.width * 0.23,
        paddingVertical: appTheme.SIZES.width * 0.18,
        backgroundColor: COLORS.border,
    },
    cardContant: {
        position: 'absolute',
        top: 0, bottom: 0, right: 0, left: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardText: {
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: '500',
        padding: 6,
        textAlign: 'center'
    },

})
