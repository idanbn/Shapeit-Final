import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { COLORS } from '../../../constants';
import { auth } from '../../../FireBase/GetDBs/reduce';

import SelectSex from '../../Login/SignUp/SelectSex';
import SlideModel from '../SlideModel';
import { updateUserBMR } from '../../../redux/users/action';

const UpdateBMR = (props) => {

    const calcBMR = (sex, weight, height, age) => {
        var s = 0;
        /////////// where s is +5 for males and -161 for females.
        if (sex == '2')
            s = -161;
        else if (sex == '1')
            s = 5;

        /////////// BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day),
        const BMR = (10 * weight) + (6.25 * height) - (5 * age) + s

        return BMR | 0;

    }
    const dispatch = useDispatch();

    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} fieldName='BMR'>


            <View style={styles.container}>
                <Formik
                    initialValues={{ height: '', weight: '', age: '', sex: '' }}
                    onSubmit={(values) => {

                        const isNullish = Object.values(values).every(value => {
                            if (value === '') {
                                return false;
                            }

                            return true;
                        });

                        if (isNullish) {
                            if (validValue(values.age, 'age') && validValue(values.weight, 'weight') && validValue(values.height, 'height')) {
                                const BMR = calcBMR(values.sex, values.weight, values.height, values.age);
                                dispatch(updateUserBMR(auth.currentUser.uid, BMR));
                            }

                        }
                        else {
                            alert('Fill all fields')
                        }

                    }}
                >
                    {(props) => (
                        <View>

                            <Animatable.View
                                animation="lightSpeedIn"
                                duration={1800}

                            >
                                <View style={styles.inputContainer}>

                                    <Text style={styles.inputText}> Age </Text>

                                    <TextInput
                                        placeholder="Age"
                                        value={props.values.age}
                                        onChangeText={props.handleChange('age')}
                                        style={styles.input}

                                    />

                                    <Text style={styles.inputText}> Height </Text>

                                    <TextInput
                                        placeholder="Height"
                                        value={props.values.height}
                                        onChangeText={props.handleChange('height')}
                                        style={styles.input}

                                    />

                                    <Text style={styles.inputText}> Weight </Text>

                                    <TextInput
                                        placeholder="Weight"
                                        value={props.values.weight}
                                        onChangeText={props.handleChange('weight')}
                                        style={styles.input}

                                    />


                                    <Text style={styles.inputText}> Sex </Text>


                                    <SelectSex setValue={props.handleChange('sex')} value={props.values.sex} />


                                </View>

                            </Animatable.View>

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

const validValue = (values, parmeterName) => {
    if (parmeterName === 'age') {
        if (values > 15 && values < 100)
            return true;
        else
            alert('age must to be between 16 - 99')

    }
    if (parmeterName === 'weight') {
        if (values > 40 && values < 240)
            return true;
        else
            alert('weight must to be between 40 - 240');
    }
    if (parmeterName === 'height') {
        if (values > 120 && values < 220)
            return true;
        else
            alert('height must to be between 120 - 220');
    }


    return false;

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 26,
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
    inputText: {
        color: COLORS.primary,
        marginTop: 8
    },
})

export default UpdateBMR;
