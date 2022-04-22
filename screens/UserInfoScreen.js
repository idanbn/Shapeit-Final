import { React, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { auth } from '../FireBase/GetDBs/reduce'

import { COLORS } from '../constants'

import UpdateForm from '../components/UserInfo/UpdateForm';
import FieldInfo from '../components/UserInfo/FieldInfo';
import Header from '../components/UserInfo/Header';
import DrawerNavigator from '../navigation/DrawerNavigator';
import { setDrawerVisabilty } from '../redux/DrawerNavigator';



const UserInfoScreen = ({ navigation }) => {
    const { currentUser } = useSelector(state => state.usersReducer);
    const [updateSelect, setUpdateSelect] = useState(false);

    const { drawerOpen } = useSelector(state => state.drawerReducer);

    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>

            <SafeAreaView style={styles.safearea}>

                <Header navigation={navigation} />

                <FieldInfo fieldName='name' fieldValue={auth.currentUser?.displayName} />
                <FieldInfo fieldName='email' fieldValue={auth.currentUser?.email} />
                <FieldInfo fieldName='BMR' fieldValue={currentUser.userInfo?.activeBMR} />

                <UpdateInfoButton updateSelect={updateSelect} setUpdateSelect={setUpdateSelect} />


                <View style={styles.adminButton} >

                    <TouchableOpacity
                        onPress={() => dispatch(setDrawerVisabilty())}
                    >
                        <Ionicons
                            name='ios-menu'
                            color={COLORS.primary}
                            style={{
                                fontSize: 32,

                            }}
                        />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
            {drawerOpen ?

                <DrawerNavigator navigation={navigation} drawerOpen={drawerOpen} setDrawerOpen={dispatch(setDrawerVisabilty())} />
                : null
            }
        </View>

    )


}

const UpdateInfoButton = (props) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity
                onPress={() => props.setUpdateSelect(true)}
                style={[styles.button, { marginTop: 10 }]}
            >

                <View>
                    <Text style={styles.buttonText}>Update Information</Text>
                </View>

            </TouchableOpacity>

            <UpdateForm setModelSelcted={props.setUpdateSelect} modelSelcted={props.updateSelect} />
        </View>
    );
};
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
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '500'
    },
    adminButton: {
        alignItems: 'flex-end',

    },
})