import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';

import appTheme from '../../constants/theme';
import { COLORS, icons } from '../../constants';



const Header = (props) => {
    return (
        <SafeAreaView style={{ marginLeft: 30 }}>

            <TouchableOpacity
                style={{ marginTop: 8 }}
                onPress={() => props.navigation.goBack()}
            >
                <Image
                    source={icons.back_arrow}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

            <Text style={styles.headerText}> Welcome Admin Screen {props.userInfo.name}</Text>

        </SafeAreaView>

    );
};

export default Header;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: appTheme.SIZES.height / 1.5,
        backgroundColor: COLORS.lightGray3,
    },
    headerText: {
        fontSize: 26,
        fontWeight: '500',
        color: COLORS.primary,
        marginTop: 10
    },
})
