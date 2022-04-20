import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { COLORS } from '../constants';
import appTheme from '../constants/theme';

import { SIGNOUT } from '../FireBase/Users/action';
import AdminButton from '../components/UserInfo/AdminButton';


const DrawerNavigator = ({ navigation }) => {
    const { currentUser } = useSelector(state => state.usersReducer);

    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: COLORS.transparent }}>
            <Animatable.View
                animation="fadeIn"
                delay={2100}
                duration={1600}
                style={{ flex: 1, backgroundColor: '#ababab', opacity: 0.1 }}

            />

            <View style={{ flex: 2, alignSelf: 'flex-end' }}>
                <Animatable.View
                    animation="slideInRight"
                    duration={1600}
                    style={{
                        justifyContent: 'flex-end', backgroundColor: COLORS.lightGray4, flex: 1, borderLeftWidth: 0.2,
                        borderColor: COLORS.primary,
                        shadowOffset: { width: -0.25, height: -0.5 },
                        shadowColor: '#ababab',
                        shadowOpacity: 0.25,
                        elevation: 2,
                    }}>
                    <Animatable.View
                        animation="bounceInRight"
                        delay={1700}
                        duration={1600}
                        style={styles.Buttons}
                    >
                        {
                            // currentUser.userInfo?.isAdmin ?
                            <AdminButton navigation={navigation} adminInfo={currentUser?.userInfo} />
                            // : null
                        }

                        <SIGNOUT navigation={navigation} />
                    </Animatable.View>
                </Animatable.View>
            </View >

        </View>
    );
}

const styles = StyleSheet.create({

    Buttons: {
        alignItems: 'center',

    },
})

export default DrawerNavigator;
