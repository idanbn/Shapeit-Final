import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import Header from '../components/Admin/Header';
import ScreensBox from '../components/Admin/ScreensBox';
import ScreensModal from '../components/Admin/ScreensModal';

import { COLORS, icons } from '../constants';
import appTheme from '../constants/theme';

const AdminScreen = ({ navigation, route, ...props }) => {
    const [userModalVisible, setUserModalVisible] = React.useState(false);
    const [premModalVisible, setPremModalVisible] = React.useState(false);
    return (
        <View style={{ flex: 1 }}>

            <Header navigation={navigation} userInfo={route.params} />
            <ScreensBox userInfo={route.params} setUserModalVisible={setUserModalVisible} setPremModalVisible={setPremModalVisible} />

            <ScreensModal modalName='User' ModalVisible={userModalVisible} setModalVisible={setUserModalVisible} />
            <ScreensModal modalName='Premission' ModalVisible={premModalVisible} setModalVisible={setPremModalVisible} />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: appTheme.SIZES.height / 1.5,
        backgroundColor: COLORS.lightGray3,
    },

})

export default AdminScreen;
