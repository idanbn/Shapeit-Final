export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ADMIN = 'UPDATE_USER_ADMIN';


import { ref, set, onValue } from "firebase/database";
import { auth, rt_db } from "../../FireBase/Users/reduce";


export const fetchUsers = () => {

    console.log(auth.currentUser.displayName);

    dispatch => {
        dispatch({
            type: FETCH_USERS,
            payload: 'users'
        });
    }
};

export function addUser(userId, name, email, isadmin, bmr) {

    set(ref(rt_db, 'users/' + userId), {
        uid: userId,
        username: name,
        email: email,
        isadmin: isadmin,
        bmr: bmr,
        breakfast: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },
        lunch: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } },
        dinner: { ucGu9HSJsdfsdfsdQazHzsdfs: { mid: '111' } }
    });

    dispatch({
        type: ADD_USER,
        payload: userId
    });
};