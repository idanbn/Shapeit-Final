import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { COLORS, icons } from '../constants';
import { LocalCategorysdb } from '../Localdbs';

const SeeAllScreen = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation} />
            <Cards />
        </View>
    );
}
const Header = (props) => {
    return (
        <SafeAreaView style={{ marginLeft: 30 }}>

            <TouchableOpacity
                style={{ marginTop: 8 }}
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

        </SafeAreaView>

    );
};

const Cards = () => {
    return (
        <View style={styles.cards}>
            <FlatList
                //horizontal={true}
                //showsHorizontalScrollIndicator={false}
                data={LocalCategorysdb}
                renderItem={({ item }) => <Card item={item} />}

            />

        </View>

    );
};

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default SeeAllScreen;
