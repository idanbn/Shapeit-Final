import { React, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'

import { SIGNOUT } from '../FireBase/Users/action'
import { auth } from '../FireBase/Users/reduce'

import { icons, COLORS } from '../constants'

import UpdateForm from '../components/UserInfo/UpdateForm';
import FieldInfo from '../components/UserInfo/FieldInfo';



const UserInfoScreen = ({ navigation }) => {

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

            <View style={styles.container} >

                <TouchableOpacity
                    onPress={() => setUpdateSelect(true)}
                    style={{
                        backgroundColor: COLORS.icons,
                        padding: 20,
                        borderRadius: 30,
                        width: '50%',
                        alignItems: 'center'
                    }}
                >

                    <View>
                        <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: '500' }}>Update Information</Text>
                    </View>

                </TouchableOpacity>

                <UpdateForm setModelSelcted={setUpdateSelect} modelSelcted={updateSelect} />


            </View>

            <SIGNOUT />

        </SafeAreaView>

    )


}
export default UserInfoScreen

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: COLORS.lightGray3
    },
    container: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center',
    },

})