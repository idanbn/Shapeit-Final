import { React } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import SlideModel from './SlideModel';
import { Formik } from 'formik'
import { auth } from '../../FireBase/Users/reduce';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { COLORS } from '../../constants';
import * as Animatable from 'react-native-animatable';

const LoginForm = (props) => {


    const handleLogin = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
    }

    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} >

            <View style={styles.container}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        handleLogin(values.email, values.password)


                    }}
                >
                    {(props) => (
                        <Animatable.View
                            animation="lightSpeedIn"
                            duration={1600}>

                            <View style={styles.inputContainer}>

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


                            <Animatable.View
                                animation="bounceIn"
                                duration={1400}
                                delay={900}
                                style={{ alignItems: 'center' }}
                            >


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
                                        <Text style={{ color: 'white', fontWeight: '600' }}>Login</Text>
                                    </View>

                                </TouchableOpacity>
                            </Animatable.View>

                        </Animatable.View>

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

export default LoginForm;
