import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { COLORS, images } from '../../constants';

const PopularRecipes = () => {
    return (
        <View>
            <Card>
                <SecoundCard>
                    <CardTexts />
                </SecoundCard>
            </Card>
        </View>

    );
}


const CardTexts = (props) => {
    return (
        <View>
            <Text style={styles.firstText}> Feeling Better! </Text>
        </View>
    );
};

const Card = (props) => {
    return (
        <ImageBackground source={images.crispy_chicken_burger} borderRadius={30} style={styles.card}>
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
        marginVertical: 28,
        borderRadius: 30,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 320,
        width: 260,
        justifyContent : 'flex-end',

    },
    cardContent: {
        marginVertical: 20,
        marginHorizontal: 20,

    },
    secoundcard: {
        backgroundColor: COLORS.card,
        marginBottom : 8,
        marginHorizontal: 4,
        borderRadius: 30,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 120,
        width: 250,
        opacity: 0.92
    },
    firstText: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.black,
    },
    secondText: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.lightGreen,
        marginTop: 6,
    },
})

export default PopularRecipes;
