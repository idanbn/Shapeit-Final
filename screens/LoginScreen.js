import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { React, useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { auth } from '../FireBase/Users/reduce';
import { LogBox } from 'react-native';
import LoginForm from '../components/Login/LoginForm'
import RegisterForm from '../components/Login/RegisterForm';
import { COLORS } from '../constants';
import { useDispatch } from 'react-redux';
import { addUser, getUser } from '../redux/users/action';
import * as Animatable from 'react-native-animatable';

LogBox.ignoreAllLogs();


const LoginScreen = () => {

    const dispatch = useDispatch();


    const [loginSelcted, setLoginSelcted] = useState(false);
    const [registerSelcted, setRegiisterSelcted] = useState(false);


    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(getUser(user.uid));

                navigation.replace("tabs")
            }
        })

        return unsubscribe
    }, [])



    return (

        <View style={styles.container}>

            <View style={{ position: 'absolute', paddingBottom: 530 }} >

                <Animatable.Text
                    animation="bounceIn"
                    duration={2000}
                    style={{
                        fontSize: 50,
                        color: COLORS.primary,
                        textShadowColor: '#000',
                        fontWeight: 'bold',
                        textShadowRadius: 3,
                        textShadowOffset: { width: 0.4, height: 0.4 }
                    }}>
                    Food Tracker
                </Animatable.Text>

            </View>

            <Animatable.View
                animation="bounceIn"
                duration={6000}
                style={styles.buttonContainer}
            >

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setLoginSelcted(true)}
                >

                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                    <LoginForm setModelSelcted={setLoginSelcted} modelSelcted={loginSelcted} />

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => setRegiisterSelcted(true)}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

                <RegisterForm setModelSelcted={setRegiisterSelcted} modelSelcted={registerSelcted} />

            </Animatable.View>
        </View >

    );
}
export default LoginScreen;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: windowHeight / 1.5,

    },
    button: {
        backgroundColor: COLORS.card,
        borderColor: COLORS.border,
        width: '100%',
        padding: 22,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: COLORS.border,
        marginTop: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: COLORS.icons,
        fontWeight: '700',
        fontSize: 16,
    },
});
