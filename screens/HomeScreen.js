import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import RenderNavBar from '../components/header2'
import { SIGNOUT } from '../FireBase/Users/action'
import { auth } from '../FireBase/Users/reduce'
import { icons, SIZES, COLORS, FONTS } from '../constants'


const HomeScreen = () => {

    return (

        <SafeAreaView style={styles.safearea}>

            <RenderNavBar />

            <View style={styles.container}>

                <Text>Email: {auth.currentUser?.email}</Text>

                <SIGNOUT />

            </View>
        </SafeAreaView>

    )


}
export default HomeScreen

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: COLORS.lightGray3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})