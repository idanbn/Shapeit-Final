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
                        duration={1500}
                        style={{ flex: 1, justifyContent: 'flex-end' }}
                    >
                        <View style={styles.container} >

                            {props.children}

                            {/*<CloseButton setModalVisible={props.setModalVisible} />*/}

                        </View>
                    </Animatable.View>
                    : null
            }
        </>
    );
};

const CloseButton = (props) => (
    <TouchableOpacity
        onPress={() => props.setModalVisible(false)}
        style={styles.closeButton}
    >
        <Text>Close</Text>
    </TouchableOpacity>
);

export default ScreensModal;


const styles = StyleSheet.create({
    container: {
        height: appTheme.SIZES.height / 1.5,
        backgroundColor: COLORS.lightGray3,
    },
    closeButton: {
        alignSelf: 'center',
        marginTop: 20,
    },
})
