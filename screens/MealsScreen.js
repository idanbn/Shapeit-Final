import { React, useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import { fetchData } from '../FireBase/FireStore/action';

const MealsScreen = () => {

    const [meals, setMeals] = useState(new Array());

    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = async () =>  {
        const mealsdata = await fetchData();
        setMeals(mealsdata.meals)
    }

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.meal_name} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
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
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

