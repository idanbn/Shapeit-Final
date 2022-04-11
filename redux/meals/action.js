export const ADD_BREAKFAST = 'ADD_BREAKFAST';
export const ADD_LUNCH = 'ADD_LUNCH';
export const ADD_DINNER = 'ADD_DINNER';
export const REMOVE_MEAL = 'ADD_MEAL';
export const FETCH_MEALS = 'FETCH_MEALS'

import { addMeal, fetchData, deleteMeal } from '../../FireBase/FireStore/action';

export const fetchMeals = (Name) => async dispatch => {

    const mealsdata = await fetchData(Name);

    dispatch({
        type: FETCH_MEALS,
        payload: { data: mealsdata.meals, name: Name }
    })
}

export const addBreakfast = meal => dispatch => {

    //writeMealData('Breakfast', meal);
    addMeal('Breakfast', meal);

    dispatch({
        type: ADD_BREAKFAST,
        payload: meal
    })
}


export const addLunch = meal => dispatch => {

    //writeMealData('Lunch', meal);
    addMeal('Lunch', meal);

    dispatch({
        type: ADD_LUNCH,
        payload: meal
    })
}

export const addDinner = meal => dispatch => {

    //writeMealData('Dinner', meal);
    addMeal('Dinner', meal);

    dispatch({
        type: ADD_DINNER,
        payload: meal
    })
}

export const removeMeal = (mealTimeName, meal_doc_id) => dispatch => {
    deleteMeal(mealTimeName, meal_doc_id);

    dispatch({
        type: REMOVE_MEAL,
        payload: { mealTimeName: mealTimeName, meal_doc_id: meal_doc_id }
    })
}