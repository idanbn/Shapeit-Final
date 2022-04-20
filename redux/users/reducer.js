import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER, GET_USER_BY_ID, UPDATE_USER_DAILY, UPDATE_USER_DAILY_NEGATIVE } from './action';


const initialState = {
    availableUsers: '',

    currentUser: {
        uid: '',
        name: '',
        activeBMR: '',
        dailyCalorie: 0,
        isAdmin: false,

        nutrionalvalues: {
            protein: 0,
            carbs: 0,
            fat: 0,
            sugar: 0
        }
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ID:
            return { ...state, currentUser: action.payload };

        case ADD_USER:
            return { ...state, currentUser: action.payload };

        case UPDATE_USER_DAILY:
            return { ...state, currentUser: action.payload };

        case UPDATE_USER_DAILY_NEGATIVE:
            return { ...state, currentUser: action.payload };
        ///admin
        case FETCH_USERS:
            return { ...state, availableUsers: action.payload };

        case DELETE_USER:
            return { ...state, availableUsers: action.payload };


    }
    return state;
}

export default usersReducer;