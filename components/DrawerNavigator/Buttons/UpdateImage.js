import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { COLORS } from '../../../constants';
import appTheme from '../../../constants/theme';

const UpdateImage = (props) => {
    useEffect(() => {

    }, [props.chooseGallery]);
    return (
        <>
            {props.firstRender ?
                null

                : <Animatable.View
                    animation={props.chooseGallery ? "slideInUp" : "fadeOutDown"}
                    duration={800}
                    style={styles.Card}
                >
                    <View style={{ top: 20, alignItems: 'center' }}>
                        <ChooseFromGallery setChooseFromGallery={props.setChooseFromGallery} />
                        <TakeImageFromCamera setChooseFromGallery={props.setChooseFromGallery} />
                    </View>
                </Animatable.View>

            }
        </>
    );
}


const ChooseFromGallery = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => props.setChooseFromGallery(false)}
        >
            <Text>Choose from gallery</Text>
        </TouchableOpacity>
    );
}

const TakeImageFromCamera = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.button, marginTop: 10 }}
            onPress={() => props.setChooseFromGallery(false)}

        >
            <Text>Take Image From Camera</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Card: {
        position: 'absolute',
        top: appTheme.SIZES.height / 1.38,
        left: 0, right: 0,
        height: appTheme.SIZES.height / 4.8,
        borderRadius: 20,
        backgroundColor: COLORS.card,
        marginHorizontal: 3,
    },
    button: {
        backgroundColor: COLORS.icons,
        padding: 20,
        borderRadius: 10,
        width: '95%',
        alignItems: 'center',
    },
})

export default UpdateImage;

