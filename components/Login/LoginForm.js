import { React } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import SlideModel from './SlideModel';
import { Formik } from 'formik'
import { auth } from '../../FireBase/Users/reduce';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { COLORS } from '../../constants';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


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

                                <Text style={styles.inputText}> Email </Text>
                                <View style={styles.inputcont}>
                                    <MaterialIcons
                                        name='email'
                                        size={22}
                                        color={COLORS.icons}
                                        style={{ position: 'absolute', zIndex: 200, alignSelf: 'center', marginLeft: 10 }}
                                    />
                                    <TextInput
                                        placeholder="Email"
                                        value={props.values.email}
                                        onChangeText={props.handleChange('email')}
                                        style={styles.input}

                                    />
                                </View>

                                <Text style={styles.inputText}> Password </Text>
                                <View style={styles.inputcont}>
                                    <MaterialIcons
                                        name='lock-outline'
                                        size={22}
                                        color={COLORS.icons}
                                        style={{ position: 'absolute', zIndex: 200, alignSelf: 'center', marginLeft: 10 }}
                                    />
                                    <TextInput
                                        placeholder="Password"
                                        value={props.values.password}
                                        onChangeText={props.handleChange('password')}
                                        style={styles.input}
                                        secureTextEntry={true}

                                    />

                                </View>
                            </View>


                            <Animatable.View
                                animation="bounceIn"
                                duration={1400}
                                delay={900}
                                style={{ alignItems: 'center' }}
                            >

                                <TouchableOpacity
                                    onPress={() => props.handleSubmit()}
                                    style={{ width: '50%' }}
                                    activeOpacity={0.7}
                                >
                                    <LinearGradient colors={[COLORS.border, COLORS.icons, COLORS.card,]} style={styles.linearGradient}>

                                        <View>
                                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 17, fontFamily: 'Lobster-Regular' }}>Login</Text>
                                        </View>
                                    </LinearGradient>

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
        marginTop: 30,

    },
    inputContainer: {
        width: '80%',
        marginLeft: 40,
    },
    inputcont: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 26,
        paddingVertical: 20,
        borderRadius: 6,
        width: '100%',
        marginLeft: 8,
        marginTop: 4,
    },
    inputText: {
        color: COLORS.primary,
        marginTop: 16
    },
    linearGradient: {
        marginTop: 40,
        backgroundColor: COLORS.icons,
        padding: 18,
        borderRadius: 22,
        alignItems: 'center',
    },
})

export default LoginForm;
