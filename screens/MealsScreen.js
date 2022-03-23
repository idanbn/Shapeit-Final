import { React, useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { COLORS } from '../constants';

import { fetchData } from '../FireBase/FireStore/action';

const MealsScreen = () => {

    const [meals, setMeals] = useState(new Array());

    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = async () => {
        const mealsdata = await fetchData();
        setMeals(mealsdata.meals)
    }

    const Item = ({ meal }) => (
        <View style={styles.item}>
            <Text style={styles.meal}>{meal}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item meal={item.meal_name} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.mealId}
                data={meals}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: COLORS.secondary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    meal: {
        fontSize: 32,
    },
});

