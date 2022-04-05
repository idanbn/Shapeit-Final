import { ADD_BREAKFAST ,REMOVE_MEAL } from "./actions";


const initialState = {
    user_id: '',
    date: '',
    breakfast: new Array(),
    lunch : new Array(),
    dinner : new Array()
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BREAKFAST:
            return {...state, breakfast : action.payload};

        case REMOVE_MEAL:
            return {...state, breakfast : action.payload};

    }
    return state;
}

export default mealsReducer;