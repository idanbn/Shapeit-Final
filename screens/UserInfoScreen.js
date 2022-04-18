import { React, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux';

import { SIGNOUT } from '../FireBase/Users/action'
import { auth } from '../FireBase/Users/reduce'

import { icons, COLORS } from '../constants'

import UpdateForm from '../components/UserInfo/UpdateForm';
import FieldInfo from '../components/UserInfo/FieldInfo';



const UserInfoScreen = ({ navigation }) => {
    const { currentUser } = useSelector(state => state.usersReducer);
    const [updateSelect, setUpdateSelect] = useState(false);

    return (

        <SafeAreaView style={styles.safearea}>

            <View style={{ padding: 8, marginLeft: 4 }} >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50, }}
                    onPress={() => navigation.navigate('Statistics')}
                >
                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 32,
                            height: 32,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>

            <FieldInfo fieldName='name' fieldValue={auth.currentUser?.displayName} />
            <FieldInfo fieldName='email' fieldValue={auth.currentUser?.email} />
            <FieldInfo fieldName='BMR' fieldValue={currentUser.userInfo?.activeBMR} />


            <View style={styles.container} >
                {
                    currentUser.userInfo.isAdmin ?
                        <AdminButton navigation={navigation} userInfo={currentUser?.userInfo} />
                        : null
                }

                <TouchableOpacity
                    onPress={() => setUpdateSelect(true)}
                    style={[styles.button, { marginTop: 10 }]}
                >

                    <View>
                        <Text style={styles.buttonText}>Update Information</Text>
                    </View>

                </TouchableOpacity>

                <UpdateForm setModelSelcted={setUpdateSelect} modelSelcted={updateSelect} />


            </View>

            <SIGNOUT />

        </SafeAreaView>

    )


}

const AdminButton = ({ navigation, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Admin', props.userInfo)}
        >
            <Text style={styles.buttonText} >Go to Admin Screen</Text>
        </TouchableOpacity>
    );
}
export default UserInfoScreen

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#eff5f5'
    },
    container: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center',
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