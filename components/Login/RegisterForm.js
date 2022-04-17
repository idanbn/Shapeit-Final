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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SelectSex from './SignUp/SelectSex';
import { LinearGradient } from 'expo-linear-gradient';


const RegisterForm = (props) => {
    const dispatch = useDispatch();

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

    const calcBMR = (sex, weight, height, age) => {
        var s = 0;
        /////////// where s is +5 for males and -161 for females.
        if (sex == '2')
            s = -161;
        else if (sex == '1')
            s = 5;


        console.log(s);

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
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} setNextSelected={setNextSelected} >

            <View>

                {
                    nextSelected ?

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
                                        handleSignUp(TemporaryValues.userName, TemporaryValues.email, TemporaryValues.password, BMR);
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
                                        duration={1600}
                                        style={styles.container}

                                    >

                                        <TouchableOpacity
                                            style={{ marginLeft: 46 }}
                                            onPress={() => setNextSelected(false)}
                                        >
                                            <MaterialIcons
                                                name='arrow-back-ios'
                                                size={24}
                                                color={COLORS.icons}
                                            />
                                        </TouchableOpacity>

                                        <View style={styles.inputContainer}>

                                            <Text style={styles.inputText}> Age </Text>

                                            <View style={styles.inputcont}>
                                                <MaterialCommunityIcons
                                                    name='calendar-month-outline'
                                                    size={22}
                                                    color={COLORS.icons}
                                                    style={{ position: 'absolute', zIndex: 200, alignSelf: 'center', marginLeft: 12 }}
                                                />
                                                <TextInput
                                                    placeholder="Age"
                                                    value={props.values.age}
                                                    onChangeText={props.handleChange('age')}
                                                    style={styles.input}
                                                    keyboardType="numeric"
                                                    maxLength={2}

                                                />
                                            </View>

                                            <Text style={styles.inputText}> Weight </Text>

                                            <View style={styles.inputcont}>
                                                <MaterialCommunityIcons
                                                    name='weight-kilogram'
                                                    size={22}
                                                    color={COLORS.icons}
                                                    style={{ position: 'absolute', zIndex: 200, alignSelf: 'center', marginLeft: 12 }}
                                                />
                                                <TextInput
                                                    placeholder="Weight"
                                                    value={props.values.weight}
                                                    onChangeText={props.handleChange('weight')}
                                                    style={styles.input}
                                                    keyboardType="numeric"
                                                    maxLength={3}


                                                />
                                            </View>
                                            <Text style={styles.inputText}> Height </Text>

                                            <View style={styles.inputcont}>
                                                <MaterialCommunityIcons
                                                    name='human-male-height'
                                                    size={22}
                                                    color={COLORS.icons}
                                                    style={{ position: 'absolute', zIndex: 200, alignSelf: 'center', marginLeft: 12 }}
                                                />
                                                <TextInput
                                                    placeholder="Height"
                                                    value={props.values.height}
                                                    onChangeText={props.handleChange('height')}
                                                    style={styles.input}
                                                    keyboardType="numeric"
                                                    maxLength={3}
                                                    onBlur={() => validValue(props.values, 'Height')}


                                                />
                                            </View>

                                            <Text style={styles.inputText}> Sex </Text>


                                            <SelectSex setValue={props.handleChange('sex')} value={props.values.sex} />


                                        </View>
                                        {
                                            Object.values(props.values).every(value => { if (value === '') { return false; } return true; }) ?

                                                <CostumBottom handleSubmit={props.handleSubmit} name='Register' /> : null
                                        }
                                    </Animatable.View>

                                </View>
                            )}
                        </Formik>

                        :
                        <Formik
                            initialValues={{ userName: '', email: '', password: '' }}
                            onSubmit={(values) => {

                                const isNullish = Object.values(values).every(value => {
                                    if (value === '') {
                                        return false;
                                    }

                                    return true;
                                });


                                if (isNullish) {
                                    setNextSelected(nextSelected ? false : true);
                                    setTemporaryValues(values);
                                }
                                else {
                                    alert('Fill all fields')
                                }
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

                                            <Text style={styles.inputText}> Name </Text>

                                            <View style={styles.inputcont}>
                                                <FontAwesome
                                                    name='user'
                                                    size={22}
                                                    color={COLORS.icons}
                                                    style={{ position: 'absolute', zIndex: 200, alignSelf: 'center', marginLeft: 12 }}
                                                />
                                                <TextInput
                                                    placeholder="Name"
                                                    value={props.values.userName}
                                                    onChangeText={props.handleChange('userName')}
                                                    style={styles.input}
                                                />
                                            </View>

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
                                                    secureTextEntry

                                                />

                                            </View>
                                        </View>
                                        {
                                            Object.values(props.values).every(value => { if (value === '') { return false; } return true; }) ?
                                                <CostumBottom handleSubmit={props.handleSubmit} name='NEXT' /> : null
                                        }
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

    <Animatable.View
        animation="bounceIn"
        duration={1600}
        style={{ alignItems: 'center' }}
    >
        <TouchableOpacity
            onPress={() => props.handleSubmit()}
            style={{ width: '50%' }}
            activeOpacity={0.7}

        >
            <LinearGradient colors={[COLORS.border, COLORS.icons, COLORS.card,]} style={styles.linearGradient}>

                <View>
                    <Text style={styles.bottomText}>{props.name}</Text>
                </View>
            </LinearGradient>

        </TouchableOpacity>

    </Animatable.View>
);


const styles = StyleSheet.create({
    container: {
        marginTop: 14,
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
        marginTop: 12
    },

    bottomText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Lobster-Regular'
    },
    linearGradient: {
        marginTop: 21,
        backgroundColor: COLORS.icons,
        padding: 18,
        borderRadius: 22,
        alignItems: 'center',
    },
})

export default RegisterForm;
