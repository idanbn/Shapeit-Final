import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image, Modal } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { COLORS, icons } from '../constants';
import appTheme from '../constants/theme';

const AdminScreen = ({ navigation, route, ...props }) => {
    const [userModalVisible, setUserModalVisible] = React.useState(false);
    const [premModalVisible, setPremModalVisible] = React.useState(false);
    return (
        <View style={{ flex: 1 }}>

            <Header navigation={navigation} userInfo={route.params} />

            <ScreensBox userInfo={route.params} setUserModalVisible={setUserModalVisible} setPremModalVisible={setPremModalVisible} />

            <UserListModal modalName='User' ModalVisible={userModalVisible} setModalVisible={setUserModalVisible} />
            <UserListModal modalName='Premission'  ModalVisible={premModalVisible} setModalVisible={setPremModalVisible} />

        </View>
    );
}
const Header = (props) => {
    return (
        <SafeAreaView style={{ marginLeft: 30 }}>

            <TouchableOpacity
                style={{ marginTop: 8 }}
                onPress={() => props.navigation.navigate('userInfo')}
            >
                <Image
                    source={icons.back_arrow}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

            <Text style={styles.headerText}> Welcome Admin Screen {props.userInfo.name}</Text>

        </SafeAreaView>

    );
};

const ScreensBox = (props) => {
    return (
        <View style={styles.screenBox}>

            <Card name={'Permission'} setModalVisible={props.setPremModalVisible} setModalInVisible={props.setUserModalVisible} />
            <Card name={'Users'} setModalVisible={props.setUserModalVisible} setModalInVisible={props.setPremModalVisible} />

        </View>


    );
};

const Card = (props) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => {props.setModalVisible(true); props.setModalInVisible(false)}}
        >
            <View style={styles.cardContant}>
                <Text style={styles.cardText}>Management {props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const UserListModal = (props) => {
    return (
        <Modal
            animationType='fade'
            animationDuration={1000}
            transparent={true}
            visible={props.ModalVisible}
            onRequestClose={() => props.setModalVisible(false)}
        >
            <View style={{flex:1, justifyContent:'flex-end' }}>
                <View style={styles.container} >
                <Text>{props.modalName}</Text>

                    <TouchableOpacity
                        onPress={() => props.setModalVisible(false)}
                    >
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: appTheme.SIZES.height / 1.5,
        backgroundColor: COLORS.lightGray3,
    },
    headerText: {
        fontSize: 26,
        fontWeight: '500',
        color: COLORS.primary,
        marginTop: 10
    },
    screenBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    card: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 10,
        paddingHorizontal: appTheme.SIZES.width * 0.23,
        paddingVertical: appTheme.SIZES.width * 0.18,
        backgroundColor: COLORS.border,
    },
    cardContant: {
        position: 'absolute',
        top: 0, bottom: 0, right: 0, left: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardText: {
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: '500',
        padding: 6,
        textAlign: 'center'
    },

})

export default AdminScreen;
