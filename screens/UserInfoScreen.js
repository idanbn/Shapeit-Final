import { React, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Dimensions } from 'react-native'
import RenderNavBar from '../components/header2'
import { SIGNOUT } from '../FireBase/Users/action'
import { auth } from '../FireBase/Users/reduce'
import { icons, SIZES, COLORS, FONTS } from '../constants'
import { onAuthStateChanged } from 'firebase/auth';
import UpdateForm from '../components/UserInfo/UpdateForm';
import FieldInfo from '../components/UserInfo/FieldInfo';



const UserInfoScreen = () => {

    const [updateSelect, setUpdateSelect] = useState(false);
    return (

        <SafeAreaView style={styles.safearea}>

            <RenderNavBar />

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
                        <Text style={{ color: COLORS.white , fontSize:18, fontWeight:'500'}}>Update Information</Text>
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
        marginTop:80,
        alignItems: 'center'
    },

})