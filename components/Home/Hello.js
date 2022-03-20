//materials.map(material => material.length)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HelloHeader = () => {
    return (
        <View style={styles.continuer}>
            <RenderWellcome />
            <RenderUserName />

        </View>
    );
}

const RenderWellcome = () => {

    return (
        <View style={{
            flexDirection: 'row',

        }}>

            <Ionicons
                name='sunny-outline'
                style={styles.SunIcon}
                color={COLORS.icons}
            />

            <Text style={styles.timeText}> Good Morning</Text>
            <TouchableOpacity
                onPress={() => console.log('updates')}
            >

                <FontAwesome
                    name='bell-o'
                    style={styles.bellIcon}
                    color={COLORS.icons}
                />

            </TouchableOpacity>

        </View>
    )
}

const RenderUserName = () => {

    return (
        <View>

            <Text style={styles.userNameText}> Faruch Ismailov</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    continuer: {
        paddingHorizontal: 20,
        backgroundColor: '#eff5f5',
        paddingTop: 10,


    },
    SunIcon: {
        fontSize: 26,

    },
    timeText: {
        color: COLORS.darkgray,
        fontSize: 18,
        paddingHorizontal: 6,
        marginTop: 3,


    },
    bellIcon: {
        marginTop: 9,
        fontSize: 24,
        paddingHorizontal: 200,


    },
    userNameText: {
        color: COLORS.black,
        fontWeight: '700',
        fontSize: 24,

    },
})

export default HelloHeader;
