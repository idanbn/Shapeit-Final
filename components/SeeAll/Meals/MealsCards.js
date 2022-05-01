import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ImageBackground } from 'react-native';
import { MealsbyCategory } from '../../../API/FoodAPI';
import { COLORS } from '../../../constants';
import appTheme from '../../../constants/theme';
import MealsDataS from '../../Home/MealsDataS';

const MealsCards = (props) => {


    const [data, setData] = React.useState('');

    const [isSelcted, setIsSelcted] = React.useState(false);
    const [selectMealData, setSelectMealData] = React.useState('');

    React.useEffect(() => {
        PopularMealsData(props.category);

    }, []);



    const PopularMealsData = async (category) => {
        const mealsdata = await MealsbyCategory(category);
        setData(mealsdata);
    }


    return (
        <View style={styles.cards}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <Card item={item} setIsSelcted={setIsSelcted} setSelectMealData={setSelectMealData} />}
                numColumns={2}
            />
            <MealsDataS data={selectMealData} setModelSelcted={setIsSelcted} modelSelcted={isSelcted} />


        </View>

    );
};

const Card = ({ item, ...props }) => {
    return (


        <TouchableOpacity
            onPress={() => {
                props.setSelectMealData(item);
                props.setIsSelcted(true);
            }}
            style={styles.cardsRow}
            activeOpacity={0.8}

        >
            <ImageBackground source={{ uri: item.image }} resizeMode='cover' borderRadius={10}
                style={{ position: 'absolute', top: 0, right: 0, opacity: 0.92, width: '98%', height: '100%' }}
            />
            <View style={styles.card}  >

                <View style={styles.cardText}>
                    <Text numberOfLines={2} style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardCalorie}>{item.nutrition ? item.nutrition.nutrients.filter(obj => obj.name == 'Calories')[0].amount | 0 : "50"} Kcal</Text>
                </View>
            </View>

        </TouchableOpacity >



    );
};



const styles = StyleSheet.create({
    cards: {
        marginTop: 10,
        marginHorizontal: 4,
        marginBottom: appTheme.SIZES.height / 13,

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
        width: '96%',
        paddingVertical: 100,
    },
    cardText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 6,
    },
    cardTitle: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    cardCalorie: {
        color: COLORS.border,
        fontSize: 15,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
    },
})

export default MealsCards;
