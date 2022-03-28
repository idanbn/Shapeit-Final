import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from './reduce'
import Octicons from 'react-native-vector-icons/Octicons'
import { COLORS } from '../../constants'

const SIGNOUT = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View
            style={{
                flexDirection: 'row-reverse',
                marginLeft: 14,
                marginBottom: 20
            }} >

            <TouchableOpacity
                onPress={handleSignOut}
            >
                <Octicons
                    name='sign-out'
                    style={{
                        fontSize: 36,
                        fontWeight: '600',
                        color: COLORS.icons,
                    }}

                />

            </TouchableOpacity>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </View>

        </View>
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

        paddingTop: 6,
        alignItems: 'center',
        marginRight: 4,
    },
    buttonText: {
        color: COLORS.icons,
        fontWeight: '700',
        fontSize: 16,
    },
})