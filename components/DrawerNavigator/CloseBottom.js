import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants';
import { setDrawerVisabilty } from '../../redux/DrawerNavigator';

const CloseBottom = (props) => {
    //const { drawerOpen } = useSelector(state => state.drawerReducer);
    const dispatch = useDispatch();
    return (
        <SafeAreaView >
            <TouchableOpacity
                onPress={() => dispatch(setDrawerVisabilty())}
                style={{
                    paddingLeft: 16,
                    paddingTop: 6,
                }}
            >

                <Ionicons name='ios-close'
                    color={COLORS.primary}
                    size={32}
                    style={{

                    }}
                />
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({})

export default CloseBottom;
