import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';


import { COLORS, images } from '../../constants';
import { auth } from '../../FireBase/GetDBs/reduce';

const ProfileInfo = (props) => {
    const { currentUser } = useSelector(state => state.usersReducer);
    return (
        <Animatable.View
            animation="fadeInDown"
            delay={460}
            duration={1500}
        >
            <View style={{ alignItems: 'center', marginTop: 6 }}>
                <View>
                    <Text style={styles.name}>{auth.currentUser.displayName}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { props.setChooseFromGallery(true); props.setFirstRender(false); }}
                    style={styles.image}
                >

                    <Image
                        source={images.burger_restaurant_2}
                        resizeMode="cover"
                        style={{ width: 120, height: 120, borderRadius: 60 }}
                    />

                </TouchableOpacity>
            </View>

            <View style={styles.fields}>

                <Field name='Email' data={auth.currentUser.email} />
                <Field name='BMR' data={currentUser.userInfo?.activeBMR} />
                <Field name='Last Signin' data={currentUser.userInfo?.lastSignIn} />

            </View>
        </Animatable.View>
    );
}

const Field = (props) => (
    <View style={styles.fieldRow}>
        <Text style={styles.fieldText} >{props.name}:  </Text>
        <Text style={styles.fieldData} >{props.data}</Text>
    </View>
);

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        paddingBottom: 15,
        color: COLORS.primary,
        shadowOffset: { width: -0.5, height: 1 },
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.5,
        elevation: 2,
    },
    image: {
        borderRadius: 60,
        borderWidth: 1.5,
        borderColor: '#C0C0C0',
        backgroundColor: COLORS.lightGray3,
        shadowOffset: { width: -0.5, height: 1 },
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.2,
        elevation: 2,
    },
    fieldText: {
        fontSize: 17,
        color: COLORS.primary,
        paddingTop: 7,
    },
    fieldData: {
        fontSize: 17,
        color: COLORS.primary,
        paddingBottom: 8,
        paddingTop: 7,
    },
    fields: {
        marginTop: 34,
        opacity: 0.7,
    },
    fieldRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: COLORS.border,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
})

export default ProfileInfo;
