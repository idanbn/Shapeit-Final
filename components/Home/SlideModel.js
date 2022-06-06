import { React } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { COLORS } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'



const SlideModel = (props) => {


    const ModelContant = (props) => {
        return (
            <>


                <View
                    style={{
                        flex: 1,
                        marginTop: Dimensions.get('window').height / 2.82,
                        justifyContent: 'space-between',
                        backgroundColor: COLORS.lightGray,
                        marginHorizontal: 4,
                        borderRadius: 36,
                        zIndex:999,


                    }}
                >


                    <View style={{ alignItems: 'center', marginTop: -40 }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.setModelSelcted(false);
                                props.setAddMealselected(false);
                            }}
                        >

                            <Ionicons
                                name='remove-outline'
                                style={{
                                    fontSize: 110,
                                    color: COLORS.icons,
                                    opacity: 0.24,

                                }}

                            />

                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: -30 }}>
                        {props.children}
                    </View>
                </View>

            </>


        );

    }

    return (

        <Modal
            visible={props.modelSelcted}
            animationType='fade'
            transparent={true}
            onRequestClose={() => props.setModelSelcted(false)}

        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#101',
                    opacity: 0.3,


                }}
            />


            <Modal
                visible={props.modelSelcted}
                animationType='slide'
                transparent={true}
                onRequestClose={() => props.setModelSelcted(false)}

            >
                <ModelContant setModelSelcted={props.setModelSelcted} setAddMealselected={props.setAddMealselected} >
                    {props.children}
                </ModelContant>

            </Modal>

        </Modal>


    );
}

const styles = StyleSheet.create({})

export default SlideModel;
