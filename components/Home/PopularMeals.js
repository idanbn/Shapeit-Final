import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import MealsDataS from './MealsDataS';


const PopularMeals = ({navigation, ...props }) => {
    return (
        <View style={{ backgroundColor: '#eff5f5' }}>
            <RenderTitele navigation={navigation} name='Popular Meals' />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {props.data.map((item, index) => (
                    <View key={index}>
                        <MealCard backgroundImage={{ uri: item.image }} >
                            <SecoundCard>
                                <View style={{ flexDirection: 'row' }}>
                                    <CardTexts
                                        name={item.title}
                                        calorieValue={item.nutrition ? item.nutrition.nutrients.filter(obj => obj.name == 'Calories')[0].amount | 0 : "50"}
                                        cookingTimeValue={item.readyInMinutes}
                                    />
                                    <Icon Item={item} setModelSelcted={props.setModelSelcted} setSelectMealData={props.setSelectMealData} />
                                </View>
                            </SecoundCard>
                        </MealCard>
                    </View>
                ))}

            </ScrollView>
        </View>

    );
}

const Icon = (props) => {
    return (
        <TouchableOpacity
            style={{ justifyContent: 'flex-end', marginLeft: 24, paddingTop: 50 }}
            onPress={() => {
                props.setModelSelcted(true);
                props.setSelectMealData(props.Item);
            }}
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
                onPress={() => {
                    props.navigation.navigate('SeeAll', {
                        name: 'Meals'
                    });
                }}            >
                <Text style={styles.seeAll}> See All </Text>
            </TouchableOpacity>
        </View>
    )
}

const CardTexts = (props) => {
    return (
        <View>
            <Text style={styles.firstText} numberOfLines={2} >{props.name}</Text>
            <View style={{ position: 'absolute', bottom: -4 }} >
                <Text style={styles.secondText}>{props.calorieValue} Calories  •  {props.cookingTimeValue} Min </Text>
            </View>
        </View>
    );
};

const MealCard = (props) => {
    return (
        <ImageBackground source={props.backgroundImage} resizeMode='cover' borderRadius={20} style={styles.card}>
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
        fontSize: 19,
        fontWeight: '700',
        color: COLORS.white,
        opacity: 0.95,
        width: 190
    },
    secondText: {
        fontSize: 14.5,
        fontWeight: '500',
        color: COLORS.white,
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
