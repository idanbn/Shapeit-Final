import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants';

const AdminScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('userInfo')}
            >
                <Text style={styles.buttonText} >Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: COLORS.icons,
        padding: 20,
        borderRadius: 30,
        width: '50%',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '500'
    }
})

export default AdminScreen;
