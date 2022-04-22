import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';


import AdminButton from './Buttons/AdminButton';
import SignOutButton from './Buttons/SignOutButton';
import UserInfoButton from './Buttons/UserInfoButton';
import HomeButton from './Buttons/HomeButton';




const NavigatScreensBottons = ({ navigation, ...props }) => {
    const { currentUser } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    return (

        <View style={{ flex: 1 }}>
            
            <Animatable.View
                animation="fadeInRight"
                delay={200}
                duration={1500}
                style={styles.Buttons}
            >
                
                <HomeButton navigation={navigation} dispatch={dispatch} />
                <UserInfoButton navigation={navigation} dispatch={dispatch} />
                {
                    // currentUser.userInfo?.isAdmin ?
                    <AdminButton navigation={navigation} dispatch={dispatch} adminInfo={currentUser?.userInfo} />
                    // : null
                }

                <SignOutButton navigation={navigation} dispatch={dispatch} />

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({

    Buttons: {
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
        justifyContent: 'flex-end'

    },
})

export default NavigatScreensBottons;
