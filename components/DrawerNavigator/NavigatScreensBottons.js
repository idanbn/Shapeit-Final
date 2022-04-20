import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { SIGNOUT } from '../../FireBase/Users/action';
import AdminButton from '../UserInfo/AdminButton';




const NavigatScreensBottons = ({ navigation, ...props }) => {
    const { currentUser } = useSelector(state => state.usersReducer);
    
    return (
        <Animatable.View
            animation="fadeInRight"
            delay={200}
            duration={1500}
            style={styles.Buttons}
        >
            {
                // currentUser.userInfo?.isAdmin ?
                <AdminButton navigation={navigation} adminInfo={currentUser?.userInfo} />
                // : null
            }

            <SIGNOUT navigation={navigation} />

        </Animatable.View>

    );
}

const styles = StyleSheet.create({

    Buttons: {
        alignItems: 'center',
        marginBottom: 10,

    },
})

export default NavigatScreensBottons;
