import { ADD_BREAKFAST, ADD_DINNER, ADD_LUNCH, REMOVE_MEAL } from "./actions";


const initialState = {
    user_id: '',
    date: '',
    breakfast: new Array(),
    lunch: new Array(),
    dinner: new Array()
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BREAKFAST:
            return { ...state, breakfast: action.payload };

        case ADD_LUNCH:
            return { ...state, lunch: action.payload };

        case ADD_DINNER:
            return { ...state, dinner: action.payload };

        case REMOVE_MEAL:
            return { ...state, breakfast: action.payload };

    }
    return state;
}

export default mealsReducer;