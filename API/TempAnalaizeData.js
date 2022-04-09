import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';

import { IngredientsByID, MealInformation, MealsbyCategory, NutritionByID } from './FoodAPI';


const TempAnalaizeData = () => {

  useEffect(() => {
    //setLoading(true);

    //getMealsbyCategory('soup');
    //getNutritionByID(663637);
    //getIngredientsByID(663637);
    //getMealInformation(663637);

  }, []);

  const getMealsbyCategory = async (category) => {
    const mealsdata = await MealsbyCategory(category);
    setData(mealsdata);
    setLoading(false);
  }

  const getMealInformationByID = async (id) => {
    const mealsdata = await MealInformation(id);
    setData(mealsdata);
    setLoading(false);
  }

  const getNutritionByID = async (id) => {
    const mealdata = await NutritionByID(id);
    setData(mealdata);
    setLoading(false);
  }

  const getIngredientsByID = async (id) => {
    const mealdata = await IngredientsByID(id);
    setData(mealdata);
    setLoading(false);
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  return (
    <View style={{ marginTop: 40 }}>

      <View>

        <Text>Name: {data.title}</Text>

        <Text>Calories: {data.nutrition.nutrients.filter(obj => obj.name == 'Calories')[0].amount}</Text>

        <Text>Carbs: {data.nutrition.nutrients.filter(obj => obj.name == 'Carbohydrates')[0].amount}</Text>
        <Text>Fat: {data.nutrition.nutrients.filter(obj => obj.name == 'Fat')[0].amount}</Text>
        <Text>Protein: {data.nutrition.nutrients.filter(obj => obj.name == 'Protein')[0].amount}</Text>
        <Text>Sugar: {data.nutrition.nutrients.filter(obj => obj.name == 'Sugar')[0].amount}</Text>


        <Text>readyInMinutes: {data.readyInMinutes}</Text>

        <Text>readyInMinutes: {data.summary}</Text>


      </View>

      {/*
      <View>
        {isLoading ? <ActivityIndicator /> : (                                  //getIngredientsByID(id = 663637);
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={{ uri: 'https://spoonacular.com/cdn/ingredients_100x100/' + item.image }}
                  resizeMode='contain'
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',


                  }}
                />
                <Text>amount: {item.amount.metric.value} {item.amount.metric.unit}</Text>
                <Text>Name: {item.name}</Text>
              </View>
            )}
          />
        )}
      </View> */}


      {/*<View>    
        {isLoading ? <ActivityIndicator /> : (                                  //getMealsbyCategory(category = 'soup');
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Text>Id: {item.id}</Text>
                <Text>Name: {item.title}</Text>
                <Text>image url: {item.image}</Text>
                <Image
                  source={{ uri: item.image }}
                  resizeMode='contain'
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',


                  }}
                />
              </View>
            )}
          />
        )}
      </View>*/}

      {/*<View>               
        <Text>calories: {data.calories}</Text>                                           //getNutritionByID(id = 663637);
        <Text>carbs: {data.carbs}</Text>
        <Text>fat: {data.fat}</Text>
        <Text>protein: {data.protein}</Text>
        <Text>Sugar: {(data.bad.filter(obj => obj.title == 'Sugar'))[0].amount}</Text>

      </View>*/}

    </View>

  );
};

export default TempAnalaizeData