import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { auth } from './reduce'

const SIGNOUT = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Disconnect user');
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handleSignOut}
        >

            <Text style={styles.buttonText}>Sign out</Text>

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
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})