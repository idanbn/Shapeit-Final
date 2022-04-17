import { React, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text, Modal } from 'react-native';
import SlideModel from './SlideModel';
import { Formik } from 'formik'
import { auth } from '../../FireBase/Users/reduce';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { COLORS } from '../../constants';
import { addUser } from '../../redux/users/action';
import { useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const RegisterForm = (props) => {
    const dispatch = useDispatch();

    const calcBMR = (sex, weight, height, age) => {
        var s = 0;
        /////////// where s is +5 for males and -161 for females.
        if (sex == 'female')
            s = -161;
        else if (sex == 'male')
            s = 5;

        /////////// BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day),
        const BMR = (10 * weight) + (6.25 * height) - (5 * age) + s

        return BMR | 0;

    }

    const handleSignUp = async (userName, email, password, BMR) => {



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                //add user name
                updateProfile(user, {
                    displayName: userName,
                    //photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    dispatch(addUser(user.uid, user.displayName, BMR));

                }).catch((error) => {
                    // An error occurred
                });


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }
    const [TemporaryValues, setTemporaryValues] = useState(null);
    const [nextSelected, setNextSelected] = useState(false);

    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} >

            <View>

                {
                    nextSelected ?

                        <Formik
                            initialValues={{ height: '', weight: '', age: '', sex: '' }}
                            onSubmit={(values) => {
                                try {
                                    const BMR = calcBMR(values.sex, values.weight, values.height, values.age);
                                    handleSignUp(TemporaryValues.userName, TemporaryValues.email, TemporaryValues.password, BMR)
                                }
                                catch (error) {
                                    console.log(error);
                                }

                            }}
                        >
                            {(props) => (
                                <View>

                                    <Animatable.View
                                        animation="lightSpeedIn"
                                        duration={1600}
                                        style={styles.container}

                                    >

                                        <TouchableOpacity
                                            style={{ marginLeft: 40 }}
                                            onPress={() => setNextSelected(false)}
                                        >
                                            <MaterialIcons
                                                name='arrow-back-ios'
                                                size={24}
                                                color='red'
                                            />
                                        </TouchableOpacity>

                                        <View style={styles.inputContainer}>

                                            <TextInput
                                                placeholder="Age"
                                                value={props.values.age}
                                                onChangeText={props.handleChange('age')}
                                                style={styles.input}
                                            />

                                            <TextInput
                                                placeholder="Weight"
                                                value={props.values.weight}
                                                onChangeText={props.handleChange('weight')}
                                                style={styles.input}

                                            />

                                            <TextInput
                                                placeholder="Height"
                                                value={props.values.height}
                                                onChangeText={props.handleChange('height')}
                                                style={styles.input}

                                            />

                                            <TextInput
                                                placeholder="Sex"
                                                value={props.values.sex}
                                                onChangeText={props.handleChange('sex')}
                                                style={styles.input}
                                            />


                                        </View>

                                        <CostumBottom handleSubmit={props.handleSubmit} name='Register' />

                                    </Animatable.View>

                                </View>
                            )}
                        </Formik>

                        :
                        <Formik
                            initialValues={{ userName: '', email: '', password: '' }}
                            onSubmit={(values) => {
                                //handleSignUp(values.userName, values.email, values.password)

                                setNextSelected(nextSelected ? false : true);
                                setTemporaryValues(values);


                            }}
                        >
                            {(props) => (
                                <View
                                    style={styles.container}

                                >

                                    <Animatable.View
                                        animation="lightSpeedIn"
                                        duration={1600}
                                        style={styles.container}

                                    >

                                        <View style={styles.inputContainer}>

                                            <TextInput
                                                placeholder="Name"
                                                value={props.values.userName}
                                                onChangeText={props.handleChange('userName')}
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

                                        <CostumBottom handleSubmit={props.handleSubmit} name='NEXT' />

                                    </Animatable.View>

                                </View>
                            )}
                        </Formik>
                }




            </View >

        </SlideModel >
    );
}

const CostumBottom = (props) => (

    <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => props.handleSubmit()}
            style={styles.bottom}
        >

            <View>
                <Text style={styles.bottomText}>{props.name}</Text>
            </View>

        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
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
    bottom: {
        marginTop: 40,
        backgroundColor: COLORS.icons,
        padding: 10,
        borderRadius: 30,
        width: 150,
        alignItems: 'center',
    },
    bottomText: {
        color: 'white',
        fontWeight: '600'
    },
})

export default RegisterForm;
