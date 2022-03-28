import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import SlideModel from './SlideModel';

const UpdateForm = (props) => {
    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} >


            <View style={styles.container}>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)

                    }}
                >
                    {(props) => (
                        <View>

                            <View style={styles.inputContainer}>

                                <TextInput
                                    placeholder="Name"
                                    value={props.values.name}
                                    onChangeText={props.handleChange('name')}
                                    style={styles.input}

                                />

                                <TextInput
                                    placeholder="Email"
                                    value={props.values.email}
                                    onChangeText={props.handleChange('email')}
                                    style={styles.input}

                                />

                                <TextInput
                                    placeholder="Password"
                                    value={props.values.password}
                                    onChangeText={props.handleChange('password')}
                                    style={styles.input}
                                    secureTextEntry

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

export default UpdateForm;
