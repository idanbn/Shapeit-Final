import { React } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { COLORS } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'



const SlideModel = (props) => {
    const height = () => {
        if( props.fieldName === 'name'){
            return Dimensions.get('window').height / 5.7;
        }
        else if( props.fieldName === 'BMR'){
            return Dimensions.get('window').height / 3.1;
        }
    }



    const ModelContant = (props) => {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{
                        flex: 1,
                        marginTop: height(),
                        justifyContent: 'space-between',
                        backgroundColor: COLORS.border,
                        opacity: 0.98,
                        borderRadius: 36,
                        marginHorizontal: 4,


                    }}
                >

                    <View style={{ flex: 1 }}>
                        {props.children}
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 74 }}>
                        <TouchableOpacity
                            onPress={() => props.setModelSelcted(false)}
                            style={{
                                padding: 10,
                                borderRadius: 30,
                                alignItems: 'center'
                            }}
                        >

                            <Ionicons
                                name='ios-close-circle'
                                style={{
                                    fontSize: 50,
                                    color: COLORS.card,

                                }}

                            />

                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        );

    }

    return (

        <Modal
            visible={props.modelSelcted}
            animationType='slide'
            transparent={true}
            onRequestClose={() => props.setModelSelcted(false)}

        >
            <ModelContant setModelSelcted={props.setModelSelcted} >
                {props.children}
            </ModelContant>

        </Modal>


    );
}

const styles = StyleSheet.create({})

export default SlideModel;
