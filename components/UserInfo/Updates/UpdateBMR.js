import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../../constants';
import SlideModel from '../SlideModel';


const UpdateBMR = (props) => {
    const dispatch = useDispatch();

    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} fieldName='BMR'>


            <View style={styles.container}>
                <Formik
                    initialValues={{ activeBMR: '',height: '', weight: '', age: '', sex: '' }}
                    onSubmit={(values) => {
                        //dispatch(updateUserName(auth.currentUser.uid, values.name));

                    }}
                >
                    {(props) => (
                        <View>
                            <View style={styles.inputContainer}>

                                <TextInput
                                    placeholder="BMR"
                                    value={props.values.activeBMR}
                                    onChangeText={props.handleChange('activeBMR')}
                                    style={styles.input}

                                />


                            </View>


                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => props.handleSubmit()}
                                    style={{
                                        marginTop: 40,
                                        backgroundColor: COLORS.icons,
                                        padding: 10,
                                        borderRadius: 30,
                                        width: 150,
                                        alignItems: 'center',
                                    }}
                                >

                                    <View>
                                        <Text style={{ color: 'white', fontWeight: '600' }}>Update</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>

                        </View>

                    )}
                </Formik>

            </View >


        </SlideModel>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        zIndex: 999,

    },
    inputContainer: {
        width: '80%',
        marginLeft: 40,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 16,
        borderRadius: 6,
        marginTop: 10,

    },
})

export default UpdateBMR;
