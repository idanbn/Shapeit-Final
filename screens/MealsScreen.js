import { useNavigation } from '@react-navigation/native';
import { React } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../FireBase/FireStore/reduce';
import { async } from '@firebase/util';

const MealsScreen = () => {

    const navigation = useNavigation()

    const GetData = async () => {
        const mealsSnapshot = await getDocs(collection(db, "meals"));
        const mealsList = mealsSnapshot.docs.map(doc => doc.data());

        console.log(mealsList);
    }

    const SetData = async () => {
        // Add a new document in collection "meals"
        await setDoc(doc(db, "meals", "random_doc"), {
            meal_name: "steak",
            calorie_level: "0",
        });

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={GetData}
                >
                    <Text style={styles.buttonText}>get data</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={SetData}
                >
                    <Text style={styles.buttonOutlineText}>set data</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
});
