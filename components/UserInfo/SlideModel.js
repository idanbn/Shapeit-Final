import { React, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions } from 'react-native'
import { COLORS } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'



const SlideModel = (props) => {


    const ModelContant = (props) => {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: Dimensions.get('window').height / 4.4,
                    justifyContent:'space-between',
                    backgroundColor: COLORS.border,
                    opacity: 0.98,
                    borderRadius: 36,
                    marginHorizontal: 4,


                }}
            >

                <View style={{flex:1}}>
                    {props.children}
                </View>
                
                <View style={{alignItems:'center', justifyContent:'center', paddingBottom:74}}>
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
                                fontSize:50,
                                color: COLORS.card,
                                
                            }}
                        
                        />

                    </TouchableOpacity>
                </View>
            </View>
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
