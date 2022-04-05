export const ADD_BREAKFAST= 'ADD_BREAKFAST';
export const REMOVE_MEAL = 'ADD_MEAL';

export const addBreakfast = meal => dispatch => {
    dispatch({
        type: ADD_BREAKFAST,
        payload: meal
    })
}

export const removeMeal = meal => dispatch => {
    dispatch({
        type: REMOVE_MEAL,
        payload: meal
    })
}