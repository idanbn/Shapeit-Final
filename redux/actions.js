export const ADD_BREAKFAST = 'ADD_BREAKFAST';
export const ADD_LUNCH = 'ADD_LUNCH';
export const ADD_DINNER = 'ADD_DINNER';
export const REMOVE_MEAL = 'ADD_MEAL';

export const addBreakfast = meal => dispatch => {
    dispatch({
        type: ADD_BREAKFAST,
        payload: meal
    })
}

export const addLunch = meal => dispatch => {
    dispatch({
        type: ADD_LUNCH,
        payload: meal
    })
}

export const addDinner = meal => dispatch => {
    dispatch({
        type: ADD_DINNER,
        payload: meal
    })
}

export const removeMeal = meal => dispatch => {
    dispatch({
        type: REMOVE_MEAL,
        payload: meal
    })
}