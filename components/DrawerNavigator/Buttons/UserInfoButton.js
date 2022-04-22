import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { setDrawerVisabilty } from '../../../redux/DrawerNavigator';


const UserInfoButton = ({ navigation, ...props }) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('userInfo'); props.dispatch(setDrawerVisabilty()) }}
            activeOpacity={0.5}
        >
            <Text style={styles.buttonText} >Profile Information </Text>

            <FontAwesome name='user-circle-o' size={40} color={COLORS.icons} style={{marginBottom:6,marginRight:6}} />

        </TouchableOpacity>
    );
}
export default UserInfoButton


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
