import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SIGNOUT } from '../FireBase/Users/action'
import { auth } from '../FireBase/Users/reduce'


const HomeScreen = () => {

    return (
        <View style={styles.container}>

            <Text>Email: {auth.currentUser?.email}</Text>

            <SIGNOUT />

        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})