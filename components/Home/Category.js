import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
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
        imageUrl: images.baked_fries,
    },
    {
        c_id: 3,
        text: 'pasta',
        imageUrl: images.baked_fries,
    },
    {
        c_id: 4,
        text: 'salat',
        imageUrl: images.baked_fries,
    },
    {
        c_id: 5,
        text: 'jankfood',
        imageUrl: images.baked_fries,
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

    return (
        <View style={{ flexDirection: 'row' }}>
            
            <RenderCategoryImage category={'meat'} imageUrl={images.chicago_hot_dog} />
            <RenderCategoryImage category={'meat'} imageUrl={images.chicago_hot_dog} />
            <RenderCategoryImage category={'meat'} imageUrl={images.chicago_hot_dog} />
            <RenderCategoryImage category={'meat'} imageUrl={images.chicago_hot_dog} />

        </View>
    )
}

const RenderCategoryImage = (props) => {

    return (
        <View>
            <Image
                source={props.imageUrl}
                resizeMode='contain'
                style={{
                    width: 60,
                    height: 60,

                }}
            />
            <Text style={styles.imageText}> {props.category} </Text>

        </View>
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
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.black,
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.icons,
    },
    imageText: {
        fontWeight: '500',
        color: COLORS.black,
        marginVertical: 1,
        marginHorizontal: 10


    },

})

export default Category;
