import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import Header from '../components/Admin/Header';
import ScreensBox from '../components/Admin/ScreensBox';
import ScreensModal from '../components/Admin/ScreensModal';
import UserList from '../components/Admin/UserList';
import { fetchUsers } from '../redux/Admin/action';


const AdminScreen = ({ navigation, route, ...props }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUsers());

    }, []);

    const [userModalVisible, setUserModalVisible] = React.useState(false);
    const [premModalVisible, setPremModalVisible] = React.useState(false);

    const availableUsers = useSelector(state => state.usersReducer.availableUsers);

    return (
        <View style={{ flex: 1, backgroundColor: '#eff5f5' }}>

            <Header navigation={navigation} userInfo={route.params} />

            <ScreensBox userInfo={route.params} setUserModalVisible={setUserModalVisible} setPremModalVisible={setPremModalVisible} />

            <ScreensModal ModalVisible={userModalVisible} setModalVisible={setUserModalVisible} >
                <UserList modalName='User' data={availableUsers} />
            </ScreensModal>

            <ScreensModal ModalVisible={premModalVisible} setModalVisible={setPremModalVisible} >
            </ScreensModal>

        </View>
    );
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default AdminScreen;
