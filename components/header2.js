
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import { icons, SIZES, COLORS, FONTS } from '../constants'


const RenderNavBar = () => {
    return (
        <View
        style={styles.container}
    >
        <TouchableOpacity
            style={{ justifyContent: 'center', width: 50, }}
            onPress={() => console.log('Go Back')}
        >
            <Image
                source={icons.back_arrow}
                style={{
                    width: 32,
                    height: 32,
                    tintColor: COLORS.primary
                }}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
            onPress={() => console.log('More')}
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
    </View>

    )
}

export default RenderNavBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 38,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
})
