import { React, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS, images } from '../../constants';


export const LocalCategorydb = [

    {
        c_id: 1,
        text: 'meat',
        imageUrl: images.baked_fries,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: '223',
                cookingTime: '20',
                imageUrl: images.kolo_mee,
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: '760',
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: '190',
                cookingTime: '35',
                imageUrl: images.ice_kacang,
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: '100',
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
            },
        ]
    },
    {
        c_id: 2,
        text: 'fish',
        imageUrl: images.chicago_hot_dog,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: '223',
                cookingTime: '20',
                imageUrl: images.nasi_briyani_mutton,
            },
            {
                m_id: 2,
                m_name: 'Ceaser salad',
                calorie: '100',
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: '190',
                cookingTime: '35',
                imageUrl: images.ice_kacang,
            },
            {
                m_id: 4,
                m_name: 'Hamburger with friesd',
                calorie: '760',
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
            },
        ]
    },
    {
        c_id: 3,
        text: 'pasta',
        imageUrl: images.hawaiian_pizza,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: '223',
                cookingTime: '20',
                imageUrl: images.sarawak_laksa,
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: '760',
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: '190',
                cookingTime: '35',
                imageUrl: images.ice_kacang,
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: '100',
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
            },
        ]
    },
    {
        c_id: 4,
        text: 'salat',
        imageUrl: images.japanese_restaurant,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: '223',
                cookingTime: '20',
                imageUrl: images.sushi,
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: '760',
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: '190',
                cookingTime: '35',
                imageUrl: images.ice_kacang,
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: '100',
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
            },
        ]
    },
    {
        c_id: 5,
        text: 'jankfood',
        imageUrl: images.kolo_mee,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: '223',
                cookingTime: '20',
                imageUrl: images.kolo_mee,
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: '760',
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: '190',
                cookingTime: '35',
                imageUrl: images.ice_kacang,
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: '100',
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
            },
        ]
    },
    {
        c_id: 6,
        text: 'test',
        imageUrl: images.noodle_shop,
        categoryMeals: [
            {
                m_id: 1,
                m_name: 'Spicy Ramen with Mixing Sea Food',
                calorie: '223',
                cookingTime: '20',
                imageUrl: images.kolo_mee,
            },
            {
                m_id: 2,
                m_name: 'Hamburger with friesd',
                calorie: '760',
                cookingTime: '25',
                imageUrl: images.burger_restaurant_1,
            },
            {
                m_id: 3,
                m_name: 'Chicken breast with rice',
                calorie: '190',
                cookingTime: '35',
                imageUrl: images.ice_kacang,
            },
            {
                m_id: 4,
                m_name: 'Ceaser salad',
                calorie: '100',
                cookingTime: '7',
                imageUrl: images.nasi_lemak,
            },
        ]
    },

];

const Category = ({ navigation, selectCategory, selectCategoryHandler, ...props }) => {
    return (
        <View style={{ backgroundColor: '#eff5f5', }}>
            {<RenderTitele />}
            {<RenderCategoryImages categoryData={props.categoryData} selectCategory={selectCategory} selectCategoryHandler={selectCategoryHandler} />}

        </View>
    );
}

const RenderTitele = () => {

    return (
        <View style={styles.continuer}>

            <Text style={styles.categoryText}> Category </Text>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => { console.log('See All Category') }}
            >
                <Text style={styles.seeAll}> See All </Text>
            </TouchableOpacity>
        </View>
    )
}

const RenderCategoryImages = (props) => {

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {props.categoryData.map((item, index) => (

                <View key={index} style={{ flexDirection: 'row' }}>

                    <RenderCategoryImage category={item.text} imageUrl={item.imageUrl} activeCategory={props.selectCategory} setActiveCategory={props.selectCategoryHandler} />

                </View>
            ))}
        </ScrollView>
    )
}

const RenderCategoryImage = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                props.setActiveCategory(props.category);
            }}
        >
            <View style={[
                styles.imageBorder,
                {
                    backgroundColor: props.activeCategory === props.category ? COLORS.card : COLORS.lightGray4,
                }]}>
                <Image
                    source={props.imageUrl}
                    resizeMode='contain'
                    style={{
                        flex: 2,
                        width: null,
                        height: null,
                        resizeMode: 'stretch',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        padding: -2

                    }}
                />
                <View style={{
                    marginTop: 4,
                    marginHorizontal: 40,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={[
                        styles.imageText,
                        { color: props.activeCategory === props.category ? COLORS.lightGreen : COLORS.icons, }]}
                    >
                        {props.category} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    continuer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        marginVertical: 14,
    },
    categoryText: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.black,
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.icons,
        marginTop: 5,
    },
    imageText: {
        flex: 1,
        fontWeight: '700',
        fontSize: 15,


    },
    imageBorder: {
        height: 90,
        width: 120,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: COLORS.card,
        borderRadius: 30,


    }

})

export default Category;
