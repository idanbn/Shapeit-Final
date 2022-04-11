import moment from 'moment';

import { ADD_BREAKFAST, ADD_DINNER, ADD_LUNCH, REMOVE_MEAL, FETCH_MEALS } from '../meals/action';
import { auth } from '../../FireBase/Users/reduce';


const initialState = {
    date: moment().utcOffset('+03:00').format('DD/MM/YYYY'),
    breakfast: new Array(),
    lunch: new Array(),
    dinner: new Array()
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEALS:
            if (action.payload.name == 'Breakfast')
                return { ...state, breakfast: action.payload.data };
            if (action.payload.name == 'Lunch')
                return { ...state, lunch: action.payload.data };
            if (action.payload.name == 'Dinner')
                return { ...state, dinner: action.payload.data };

        case ADD_BREAKFAST:
            state.breakfast.push(action.payload)

            return { ...state };

        case ADD_LUNCH:
            state.lunch.push(action.payload);
            return { ...state };

        case ADD_DINNER:
            state.dinner.push(action.payload);
            return { ...state };

        case REMOVE_MEAL:
            if (action.payload.mealTimeName == "Breakfast") {
                const newData = state.breakfast.filter(item => item.mealId !== action.payload.meal_doc_id);
                return { ...state, breakfast: newData };
            }

            if (action.payload.mealTimeName == 'Lunch') {
                const newData = state.lunch.filter(item => item.mealId !== action.payload.meal_doc_id);
                return { ...state, lunch: newData };
            }

            if (action.payload.mealTimeName == 'Dinner') {
                const newData = state.dinner.filter(item => item.mealId !== action.payload.meal_doc_id);
                return { ...state, dinner: newData };
            }

            return { ...state };


    }
    return state;
}

export default mealsReducer;