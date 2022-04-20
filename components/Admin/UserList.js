import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants';
import { deleteUserById } from '../../redux/Admin/action';



const UserList = (props) => {


    return (
        <View>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                {props.data.map((item, index) => (
                    <View key={index}>
                        <UserCard name={item.name} uid={item.uid} lastSignIn={item.lastSignIn} />
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}


const Header = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: COLORS.border, borderRadius: 6, marginTop: 6, marginHorizontal: 14, paddingVertical: 12, }}>

            <View style={{ marginLeft: 6 }}>
                <Text> User Name</Text>
            </View>

            <Text> |</Text>

            <Text> Last SignIn</Text>

            <Text> |</Text>


            <View style={{ marginRight: 20 }}>
                <Text> delete</Text>
            </View>

        </View>
    );
}

const UserCard = (props) => {
    const dispatch = useDispatch();
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: COLORS.border, borderRadius: 6, marginTop: 1, paddingVertical: 8, marginHorizontal: 14 }}>

            <Text style={{ flex: 1 }} > {props.name}</Text>

            <View style={{ flex: 1, marginLeft: 38, alignItems: 'center' }}>
                <Text> {props.lastSignIn}</Text>
            </View>

            <View style={{ flex: 1, marginRight: 26, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => { dispatch(deleteUserById(props.uid)) }}
                >

                    <MaterialCommunityIcons
                        name='delete'
                        size={26}
                        color={COLORS.icons}

                    />
                </TouchableOpacity>

            </View>

        </View>
    );
}


export default UserList;


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
