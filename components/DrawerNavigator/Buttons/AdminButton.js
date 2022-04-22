import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { setDrawerVisabilty } from '../../../redux/DrawerNavigator';




///props [object : adminInfo]
const AdminButton = ({ navigation, ...props }) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {navigation.navigate('Admin', props.adminInfo); props.dispatch(setDrawerVisabilty())}}
            activeOpacity={0.5}
        >
            <Text style={styles.buttonText} >Admin Screen </Text>

            <MaterialIcons name='admin-panel-settings' size={48} color={COLORS.icons} />

        </TouchableOpacity>
    );
}
export default AdminButton


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
