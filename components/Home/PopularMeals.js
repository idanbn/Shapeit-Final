import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, images } from '../../constants';
import Feather from 'react-native-vector-icons/Feather';

const Mealsdb = [

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

];


const PopularMeals = () => {
    return (
        <View>
            <RenderTitele name='Popular Meals' />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Mealsdb.map((item, index) => (
                    <MealCard backgroundImage={item.imageUrl} key={index} >
                        <SecoundCard>
                            <View style={{ flexDirection: 'row' }}>
                                <CardTexts 
                                name={item.m_name}
                                calorieValue={item.calorie}
                                cookingTimeValue={item.cookingTime}
                                />
                                <Icon />
                            </View>
                        </SecoundCard>
                    </MealCard>
                ))}
            </ScrollView>
        </View>

    );
}

const Icon = () => {
    return (
        <TouchableOpacity
            style={{ justifyContent: 'flex-end', marginLeft: 24, paddingTop: 50 }}
            onPress={() => { console.log('meal data'); }}
        >
            <Feather
                name='bookmark'
                style={styles.markIcon}
                color={COLORS.white}

            />
        </TouchableOpacity>
    )
}

const RenderTitele = (props) => {

    return (
        <View style={styles.continuer}>

            <Text style={styles.categoryText}> {props.name} </Text>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => { console.log('See All') }}
            >
                <Text style={styles.seeAll}> See All </Text>
            </TouchableOpacity>
        </View>
    )
}

const CardTexts = (props) => {
    return (
        <View>
            <Text style={styles.firstText}>{props.name}</Text>
            <Text style={styles.secondText}>{props.calorieValue} Calories  •  {props.cookingTimeValue} Min </Text>
        </View>
    );
};

const MealCard = (props) => {
    return (
        <ImageBackground source={props.backgroundImage} borderRadius={20} key={props.key} style={styles.card}>
            {props.children}
        </ImageBackground>
    );
};

const SecoundCard = (props) => {
    return (
        <View style={styles.secoundcard}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    continer: {
        backgroundColor: '#eff5f5',
        paddingTop: 20,
    },

    card: {
        marginHorizontal: 25,
        marginVertical: 3,
        borderRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 320,
        width: 280,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    cardContent: {
        marginVertical: 12,
        marginHorizontal: 12,

    },
    secoundcard: {
        backgroundColor: COLORS.card,
        marginBottom: 8,
        borderRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 110,
        width: 265,
        opacity: 0.92
    },
    firstText: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.white,
        opacity: 0.95,
        width: 190
    },
    secondText: {
        fontSize: 14.5,
        fontWeight: '500',
        color: COLORS.white,
        marginTop: 16,
        opacity: 0.6,
    },
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
    markIcon: {
        fontSize: 28,
        opacity: 0.7,

    }
})

export default PopularMeals;
