import { React } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import SlideModel from './SlideModel';
import { Formik } from 'formik'
import { auth } from '../../FireBase/Users/reduce';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { COLORS } from '../../constants';
import { addUser } from '../../redux/users/action';
import { useDispatch } from 'react-redux';

const RegisterForm = (props) => {
    const dispatch = useDispatch();

    const calcBMR = (sex, weight, height, age) => {
        const s = 0;
        /////////// where s is +5 for males and -161 for females.
        if (sex == 'females')
            s = -161;
        else if (sex == 'males')
            s = 5;

        /////////// BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day),
        const BMR = (10 * weight) + (6.25 * height) - (5 * age) + s

        return BMR;

    }

    const handleSignUp = async (userName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                //add user name
                updateProfile(user, {
                    displayName: userName,
                    //photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    // calcBMR(sex, weight, height, age)
                    dispatch(addUser(user.uid, user.displayName, 1517));

                }).catch((error) => {
                    // An error occurred
                });


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }

    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} >

            <View style={styles.container}>
                <Formik
                    initialValues={{ userName: '', email: '', password: '' }}
                    onSubmit={(values) => {
                        handleSignUp(values.userName, values.email, values.password)


                    }}
                >
                    {(props) => (
                        <View>

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
                                        <Text style={{ color: 'white', fontWeight: '600' }}>Register</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>

                        </View>

                    )}
                </Formik>

            </View >

        </SlideModel >
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

export default RegisterForm;
