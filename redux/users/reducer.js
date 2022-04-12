import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER, GET_USER_BY_ID } from './action';
import { fetchUsers } from './action';


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
            //console.log(action.payload);
            return { ...state, currentUser: action.payload };

        case ADD_USER:
            return { ...state ,currentUser: action.payload};


    }
    return state;
}

export default usersReducer;