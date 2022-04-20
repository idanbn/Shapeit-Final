import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { signOut } from 'firebase/auth'
import Octicons from 'react-native-vector-icons/Octicons'

import { auth } from './reduce'
import { COLORS } from '../../constants'

const SIGNOUT = ({ navigation }) => {

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
            activeOpacity={0.5}
        >
            <Text style={styles.buttonText}>Sign out</Text>

            <Octicons
                name='sign-out'
                style={{
                    fontSize: 36,
                    color: COLORS.icons,
                }}

            />
        </TouchableOpacity>
    )
}


const LOGIN = () => {
    ///***** Login component *****////

}


const REGISTER = () => {
    ///***** Register component *****////

}

export { SIGNOUT, LOGIN, REGISTER }

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingRight: 4,
        marginBottom: 38,
        borderBottomWidth: 1,
        borderColor: COLORS.secondary,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.23,
        elevation: 2,

    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: '600',

    }
})