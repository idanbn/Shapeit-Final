import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ImageBackground } from 'react-native';


import { COLORS } from '../../../constants';
import { LocalCategorysdb } from '../../../Localdbs';


const CategoriesCards = () => {
    return (
        <View style={styles.cards}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={LocalCategorysdb}
                renderItem={({ item }) => <Card item={item} />}
            // numColumns={2}
            />

        </View>

    );
}


const Card = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                console.log(item.name);
            }}
            style={styles.cardsRow}
            activeOpacity={0.8}

        >

            <ImageBackground source={item.image} resizeMode='cover' borderRadius={10}
                style={{ position: 'absolute', top: 0, right: 0, opacity: 0.92, width: '96%', height: '100%' }}
            />
            <View style={styles.card}  >

                <Text style={styles.cardText}>{item.name}</Text>

            </View>

        </TouchableOpacity >
    );
};


const styles = StyleSheet.create({
    cards: {
        marginTop: 10,
        marginHorizontal: 10,

    },
    cardsRow: {
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,

    },
    card: {
        //backgroundColor: COLORS.border,
        borderColor: COLORS.card,
        borderWidth: 3,
        borderRadius: 10,
        width: '92%',
        paddingVertical: 60,



    },
    cardText: {
        color: COLORS.primary,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 2,


    },
})

export default CategoriesCards;
