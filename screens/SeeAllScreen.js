import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ImageBackground } from 'react-native';

import { COLORS, icons } from '../constants';

import CategoriesCards from '../components/SeeAll/Categories/CategoriesCards';
import MealsCards from '../components/SeeAll/Meals/MealsCards';

const SeeAllScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView >
            <Header navigation={navigation} />
            {route.params.name === 'Categories' ? <CategoriesCards navigation={navigation} /> : <MealsCards category={route.params.category} />}
        </SafeAreaView>
    );
}
const Header = (props) => {
    return (

        <TouchableOpacity
            style={{ marginTop: 8, marginLeft: 30 }}
            onPress={() => props.navigation.goBack()}
        >
            <Image
                source={icons.back_arrow}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.primary
                }}
            />
        </TouchableOpacity>

    );
};



const styles = StyleSheet.create({

})

export default SeeAllScreen;
