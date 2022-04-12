
//////////////////////////////////// Spoonacular API functions ////////////////////////////////////
import { config } from "./configuration";


const apiURL = 'https://api.spoonacular.com/recipes/'

//--- functions ---//

const MealsbyCategory = async (category = 'pasta') => {
    const CategoryURL = 'complexSearch?number=5&addRecipeNutrition=true&fillIngredients=true&query='

    const dataURL = apiURL + CategoryURL + category + '&' + config;

    try {

        const response = await fetch(dataURL);
        const respoJsondata = await response.json();

        return respoJsondata.results;

    } catch (error) {
        console.error(error);

    }

}


const MealInformation = async (id) => {
    const InformationURL = '/information?includeNutrition=true'
    const dataURL = apiURL + id + InformationURL + '&' + config;

    try {

        const response = await fetch(dataURL);
        const respoJsondata = await response.json();

        return respoJsondata;

    } catch (error) {
        console.error(error);

    }

}

const NutritionByID = async (id) => {
    const NutritionURL = '/nutritionWidget.json'
    const dataURL = apiURL + id + NutritionURL + '?' + config;

    try {

        const response = await fetch(dataURL);
        const respoJsondata = await response.json();


        return respoJsondata;

    } catch (error) {
        console.error(error);

    }

}

const IngredientsByID = async (id) => {
    const NutritionURL = '/ingredientWidget.json'
    const dataURL = apiURL + id + NutritionURL + '?' + config;

    try {

        const response = await fetch(dataURL);
        const respoJsondata = await response.json();

        return respoJsondata.ingredients;

    } catch (error) {
        console.error(error);

    }

}

//--- export functions ---//
export { MealsbyCategory, NutritionByID, IngredientsByID, MealInformation };