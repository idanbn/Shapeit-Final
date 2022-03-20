import { React, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS, images } from '../../constants';


const Categorydb = [

    {
        c_id: 1,
        text: 'meat',
        imageUrl: images.baked_fries,
    },
    {
        c_id: 2,
        text: 'fish',
        imageUrl: images.chicago_hot_dog,
    },
    {
        c_id: 3,
        text: 'pasta',
        imageUrl: images.hawaiian_pizza,
    },
    {
        c_id: 4,
        text: 'salat',
        imageUrl: images.japanese_restaurant,
    },
    {
        c_id: 5,
        text: 'jankfood',
        imageUrl: images.kolo_mee,
    },
    {
        c_id: 6,
        text: 'test',
        imageUrl: images.noodle_shop,
    },
    {
        c_id: 7,
        text: 'test1',
        imageUrl: images.honey_mustard_chicken_burger,
    },



];

const Category = () => {
    return (
        <View style={{}}>
            {<RenderTitele />}
            {<RenderCategoryImages />}

        </View>
    );
}

const RenderTitele = () => {

    return (
        <View style={styles.continuer}>

            <Text style={styles.categoryText}> Category </Text>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => { console.log('See All') }}
            >
                <Text style={styles.seeAll}> See All </Text>
            </TouchableOpacity>
        </View>
    )
}

const RenderCategoryImages = () => {
    const [activeCategory, setActiveCategory] = useState('meat');

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {Categorydb.map((item, index) => (

                <View key={index} style={{ flexDirection: 'row' }}>

                    <RenderCategoryImage category={item.text} imageUrl={item.imageUrl} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

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
                console.log(props.category);
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
        marginTop:5,
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
