import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { React, useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { auth } from '../FireBase/Users/reduce';
import { LogBox } from 'react-native';
import LoginForm from '../components/Login/LoginForm'
import RegisterForm from '../components/Login/RegisterForm';
import { COLORS, images } from '../constants';
import { useDispatch } from 'react-redux';
import { addUser, getUser } from '../redux/users/action';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';


LogBox.ignoreAllLogs();


const LoginScreen = () => {


    const dispatch = useDispatch();


    const [loginSelcted, setLoginSelcted] = useState(false);
    const [registerSelcted, setRegiisterSelcted] = useState(false);


    const navigation = useNavigation()

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(getUser(user.uid, user.metadata.lastSignInTime));

                navigation.replace("tabs")
            }
        })

        return unsubscribe
    }, [])



    return (

        <View style={styles.container}>

            <View style={{ position: 'absolute' }} >
                <View style={{ marginBottom: Dimensions.get('window').height / 2.9 }}>
                    <Animatable.Text
                        animation="bounceIn"
                        duration={2000}
                        style={{
                            padding: 14,
                            fontSize: 86,
                            color: COLORS.primary,
                            textShadowColor: '#000',
                            fontWeight: 'bold',
                            textShadowRadius: 5,
                            textShadowOffset: { width: 0.4, height: 0.4 },
                            fontFamily: 'MsMadi-Regular'

                        }}>
                        Food Tracker
                    </Animatable.Text>

                    <Animatable.Image
                        animation="bounceIn"
                        duration={2000}
                        delay={1000}
                        source={images.applogo}
                        resizeMode='contain'
                        style={{
                            width: 200,
                            height: 300,
                            alignSelf: 'center',
                            tintColor: COLORS.primary,
                            
                        }}
                    >
                    </Animatable.Image>

                </View>
            </View>



            <Animatable.View
                animation="bounceIn"
                duration={6000}
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={() => setLoginSelcted(true)}
                    style={{ width: '100%' }}
                    activeOpacity={0.7}


                >
                    <LinearGradient colors={[COLORS.border, COLORS.icons, COLORS.card,]} style={styles.linearGradient}>

                        <Text style={styles.buttonText}>Login</Text>
                    </LinearGradient>

                </TouchableOpacity>

                <LoginForm setModelSelcted={setLoginSelcted} modelSelcted={loginSelcted} />

                <TouchableOpacity
                    onPress={() => setRegiisterSelcted(true)}
                    style={{ width: '100%' }}
                    activeOpacity={0.7}
                >
                    <LinearGradient colors={[COLORS.border, COLORS.card, COLORS.icons]} style={[styles.linearGradient, { marginTop: 16, }]}>
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </LinearGradient>

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#e9f5f9'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
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
    linearGradient: {
        padding: 22,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'Lobster-Regular'

    },
    buttonOutlineText: {
        color: COLORS.icons,
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'Lobster-Regular'

    },
});
