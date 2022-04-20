import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants';
import appTheme from '../../constants/theme';
import { deleteUserById, updateUserPermission } from '../../redux/Admin/action';



const UserList = (props) => {
    return (
        <View>
            <Header modalName={props.modalName} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 3 }}>
                {props.data.map((item, index) => (
                    <View key={index}>
                        <UserCard name={item.name} uid={item.uid} lastSignIn={item.lastSignIn} modalName={props.modalName}>
                            <Icon modalName={props.modalName} uid={item.uid} Permission={item.isAdmin} />
                        </UserCard>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}


const Header = (props) => {
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: COLORS.card, backgroundColor: COLORS.border, marginTop: 6, borderRadius: 6, marginHorizontal: 6, paddingVertical: 11, }}>

            <View style={{ ...styles.center }}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.card }} >User Name</Text>
            </View>

            <View style={{ position: 'absolute', top: -12, bottom: 0, right: 0, left: appTheme.SIZES.width / 3.2 }}>
                <Text style={{ fontSize: 52, color: COLORS.primary, opacity: 0.4 }}>|</Text>
            </View>

            <View style={styles.center}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.card }}>Last SignIn</Text>
            </View>

            <View style={{ position: 'absolute', top: -12, bottom: 0, right: 0, left: appTheme.SIZES.width / 1.6, }}>
                <Text style={{ fontSize: 52, color: COLORS.primary, opacity: 0.4 }}>|</Text>
            </View>

            <View style={styles.center}>
                {props.modalName === 'User' ?
                    <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.card }} > Delete</Text>
                    : props.modalName === 'Permission' ?
                        <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.card }} > Permission</Text>

                        : null
                }
            </View>

        </View>
    );
}

const UserCard = (props) => {
    return (
        <View style={{ flex: 2, flexDirection: 'row', borderWidth: 1, borderColor: COLORS.border, borderRadius: 6, marginTop: 3, paddingVertical: 10, marginHorizontal: 10 }}>

            <View style={{ ...styles.center, alignItems: 'baseline', }}>
                <Text style={styles.infoText} > {props.name}</Text>
            </View>

            <View style={{ ...styles.center, }}>
                <Text style={styles.infoText} > {props.lastSignIn}</Text>
            </View>

            {props.children}

        </View>
    );
}


const Icon = (props) => {
    const dispatch = useDispatch();
    return (
        <View style={{ ...styles.center, }}>
            {
                props.modalName === 'User' ?
                    <TouchableOpacity
                        onPress={() => { dispatch(deleteUserById(props.uid)) }}
                    >
                        <MaterialCommunityIcons
                            name='delete'
                            size={27}
                            color={COLORS.icons}

                        />
                    </TouchableOpacity>

                    : props.modalName === 'Permission' ?
                        <TouchableOpacity
                            onPress={() => { dispatch(updateUserPermission(props.uid, props.Permission)) }}
                        >
                            {props.Permission ?
                                <MaterialIcons
                                    name='perm-identity'
                                    size={27}
                                    color={COLORS.icons}
                                />
                                : <MaterialIcons
                                    name='perm-identity'
                                    size={27}
                                    color='tomato'
                                />}

                        </TouchableOpacity>

                        : null
            }
        </View>
    );
};

export default UserList;


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
    },
    infoText: {
        fontSize: 16,
        color: COLORS.black
    }

})
