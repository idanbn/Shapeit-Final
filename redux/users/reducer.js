import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER, GET_USER_BY_ID } from './action';
import { fetchUsers } from './action';


const initialState = {
    availableUsers: '',
    currentUser: {
        uid: '',
        activeBMR: '',
        dailyCalorie: '',
        isAdmin: '',
    },


}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ID:
            return { ...state, availableUsers: action.payload };

        case ADD_USER:
            return { ...state };


    }
    return state;
}

export default usersReducer;