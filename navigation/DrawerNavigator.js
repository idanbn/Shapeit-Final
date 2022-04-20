import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { COLORS } from '../constants';
import appTheme from '../constants/theme';

import { SIGNOUT } from '../FireBase/Users/action';
import AdminButton from '../components/UserInfo/AdminButton';
import CloseBottom from '../components/DrawerNavigator/CloseBottom';
import NavigatScreensBottons from '../components/DrawerNavigator/NavigatScreensBottons';


const DrawerNavigator = ({ navigation, ...props }) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#0000', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 ,zIndex:700}}>

            <LeftSideShadow />
            <RightSideMenu navigation={navigation}  />

        </View>
    );
}

const LeftSideShadow = (props) => (
    <Animatable.View
        style={{ flex: 1, }}
        animation="fadeInLeft"
        duration={950}

    >
        <View style={{ flex: 1, backgroundColor: '#ababab', opacity: 0.3 }}
        >
        </View>
    </Animatable.View>
);

const RightSideMenu = ({ navigation, ...props }) => {
    return (
        <View style={{ flex: 2, alignSelf: 'flex-end', opacity: 0.97 }}>

            <Animatable.View
                animation="slideInRight"
                duration={800}
                style={styles.drawerCard}
            >

                <CloseBottom />

                <NavigatScreensBottons navigation={navigation} />

            </Animatable.View>
        </View >

    );
};



const styles = StyleSheet.create({
    drawerCard: {
        justifyContent: 'flex-end', backgroundColor: COLORS.lightGray4, flex: 1, borderLeftWidth: 0.2,
        borderColor: COLORS.primary,
        shadowOffset: { width: -0.25, height: -0.5 },
        shadowColor: '#ababab',
        shadowOpacity: 0.25,
        elevation: 2,
    },
})

export default DrawerNavigator;
