export const ADD_BREAKFAST = 'ADD_BREAKFAST';
export const ADD_LUNCH = 'ADD_LUNCH';
export const ADD_DINNER = 'ADD_DINNER';
export const REMOVE_MEAL = 'ADD_MEAL';
export const FETCH_MEALS = 'FETCH_MEALS'

import { addMeal, fetchData } from '../../FireBase/FireStore/action';
import { writeMealData } from '../../FireBase/RealTimeDB/MealsRT';

export const fetchMeals = (Name) => async dispatch => {

    console.log('hey from FETCH_MEALS action to: ' + Name);

    const mealsdata = await fetchData(Name);


    //console.log(mealsdata.meals);
    dispatch({
        type: FETCH_MEALS,
        payload: { data: mealsdata.meals, name: Name }
    })
}

export const addBreakfast = meal => dispatch => {

    console.log('hey from ADD_BREAKFAST action');

    //writeMealData('Breakfast', meal);
    addMeal('Breakfast', meal);

    dispatch({
        type: ADD_BREAKFAST,
        payload: meal
    })
}


export const addLunch = meal => dispatch => {

    console.log('hey from ADD_LUNCH action');

    //writeMealData('Lunch', meal);
    addMeal('Lunch', meal);

    dispatch({
        type: ADD_LUNCH,
        payload: meal
    })
}

export const addDinner = meal => dispatch => {

    console.log('hey from ADD_DINNER action');

    //writeMealData('Dinner', meal);
    addMeal('Dinner', meal);

    dispatch({
        type: ADD_DINNER,
        payload: meal
    })
}

export const removeMeal = meal => dispatch => {

    console.log('hey from addbreakfast action');

    dispatch({
        type: REMOVE_MEAL,
        payload: meal
    })
}