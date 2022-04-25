import { UPDATE_PERMISSION, FETCH_USERS, DELETE_USER } from '../Admin/action';
import { ADD_USER, GET_USER_BY_ID, UPDATE_USER_DAILY, UPDATE_USER_DAILY_NEGATIVE, UPDATE_IMAGE, UPDATE_USER } from './action';


const initialState = {
    availableUsers: '',

    currentUser: {
        uid: '',
        name: '',
        activeBMR: '',
        dailyCalorie: 0,
        isAdmin: false,
        lastSignIn: '',
        displayPicture: '',


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
        //current user
        case GET_USER_BY_ID:
            return { ...state, currentUser: action.payload };

        case ADD_USER:
            return { ...state, currentUser: action.payload };

        case UPDATE_USER_DAILY:
            return { ...state, currentUser: action.payload };

        case UPDATE_USER_DAILY_NEGATIVE:
            return { ...state, currentUser: action.payload };

        case UPDATE_IMAGE:
            // return { ...state, currentUser: {displayPicture: action.payload} };
            return { ...state, currentUser: action.payload };

        ///admin
        case FETCH_USERS:
            return { ...state, availableUsers: action.payload };

        case DELETE_USER:
            return { ...state, availableUsers: action.payload };

        case UPDATE_PERMISSION:
            return { ...state, availableUsers: action.payload };


    }
    return state;
}

export default usersReducer;