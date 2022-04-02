import { React } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../../constants';


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

                    <RenderCategoryImage category={item.name} imageUrl={item.image} activeCategory={props.selectCategory} setActiveCategory={props.selectCategoryHandler} />

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
                    marginHorizontal: 5,
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
