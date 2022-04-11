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
            return { ...state, breakfast: action.payload };

        case ADD_LUNCH:
            return { ...state, lunch: action.payload };

        case ADD_DINNER:
            return { ...state, dinner: action.payload };


    }
    return state;
}

export default mealsReducer;