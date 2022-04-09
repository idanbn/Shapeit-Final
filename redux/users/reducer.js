import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from './action';
import { fetchUsers } from './action';


const initialState = {
    current_user: '',
    availableUsers: new Array(),
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state , availableUsers: action.payload};

        case ADD_USER:
            return { ...state };


    }
    return state;
}

export default usersReducer;