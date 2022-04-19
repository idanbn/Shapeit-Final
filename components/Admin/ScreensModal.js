import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import appTheme from '../../constants/theme';
import { COLORS } from '../../constants';


const ScreensModal = (props) => {
    return (
        <>
            {
                props.ModalVisible ?
                    <Animatable.View
                        animation="fadeInUp"
                        duration={1600}
                        style={{ flex: 1, justifyContent: 'flex-end' }}
                    >
                        <View style={styles.container} >


                            <TouchableOpacity
                                onPress={() => props.setModalVisible(false)}
                            >
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                    : null
            }
        </>
    );
};

export default ScreensModal;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: appTheme.SIZES.height / 1.5,
        backgroundColor: COLORS.lightGray3,
    },
})
