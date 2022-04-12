export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ADMIN = 'UPDATE_USER_ADMIN';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';


import { ref, set, onValue } from "firebase/database";
import { createUser, getUserById } from "../../FireBase/FireStore/Users/action";
import { auth, rt_db } from "../../FireBase/Users/reduce";


export const getUser = (uid) => async dispatch => {

    const userInfo = await getUserById(uid);

    dispatch({
        type: GET_USER_BY_ID,
        payload: userInfo
    });

};


export const addUser = (userId, name, bmr) => async dispatch => {

    let userData = {
        uid: userId,
        name: name,
        activeBMR: bmr,
        dailyCalorie: 0,
        isAdmin: false,
        nutrionalvalues: {
            protein: 0,
            carbs: 0,
            fat: 0,
            sugar: 0
        }
    }
    createUser(userId, userData);

    dispatch({
        type: ADD_USER,
        payload: userData
    });

};


export const setUserdailyCalorie = (calorie, nutrionalValues) => async dispatch => {

    updatedailyCalorie(calorie, nutrionalValues);

    dispatch({
        type: GET_USER_BY_ID,
        payload: userInfo
    });

};