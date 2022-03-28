import { React, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Dimensions } from 'react-native'
import RenderNavBar from '../components/header2'
import { SIGNOUT } from '../FireBase/Users/action'
import { auth } from '../FireBase/Users/reduce'
import { icons, SIZES, COLORS, FONTS } from '../constants'
import { onAuthStateChanged } from 'firebase/auth';
import UpdateForm from '../components/UserInfo/UpdateForm';



const UserInfoScreen = () => {

    const [updateSelect, setUpdateSelect] = useState(false);
    return (

        <SafeAreaView style={styles.safearea}>

            <RenderNavBar />

            <View style={styles.container} >

                <TouchableOpacity
                    onPress={() => setUpdateSelect(true)}
                    style={{
                        backgroundColor: 'black',
                        padding: 10,
                        borderRadius: 30,
                        width: 150,
                        alignItems: 'center'
                    }}
                >

                    <View>
                        <Text style={{ color: 'white' }}>update</Text>
                    </View>

                </TouchableOpacity>

                <UpdateForm setModelSelcted={setUpdateSelect} modelSelcted={updateSelect}/>
                
                <Text>name: {auth.currentUser?.displayName}</Text>

                <SIGNOUT />

            </View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },

})