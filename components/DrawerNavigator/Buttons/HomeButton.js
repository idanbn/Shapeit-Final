import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { setDrawerVisabilty } from '../../../redux/DrawerNavigator';




const HomeButton = ({ navigation, ...props }) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('home'); props.dispatch(setDrawerVisabilty()) }}
            activeOpacity={0.5}
        >
            <Text style={styles.buttonText} >Home </Text>

            <MaterialIcons name='home' size={48} color={COLORS.icons} style={{marginRight:2}} />

        </TouchableOpacity>
    );
}
export default HomeButton


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLORS.secondary,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.23,
        elevation: 2,
        marginBottom: 14,

    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: '600',

    }

})
