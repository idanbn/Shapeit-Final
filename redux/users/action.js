export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ADMIN = 'UPDATE_USER_ADMIN';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const UPDATE_USER_DAILY = 'UPDATE_USER_DAILY';
export const UPDATE_USER_DAILY_NEGATIVE = 'UPDATE_USER_DAILY_NEGATIVE';


import { ref, set, onValue } from "firebase/database";
import { createUser, getUserById, updateDailyCalorie, updateNegativeDailyCalorie } from "../../FireBase/FireStore/Users/action";
import { auth, rt_db } from "../../FireBase/Users/reduce";


export const getUser = (uid) => async dispatch => {

    const userInfo = await getUserById(uid);

    dispatch({
        type: GET_USER_BY_ID,
        payload: userInfo
    });

};


export const addUser = (userId, name, bmr) => async dispatch => {

    let nutrionalvalues = {
        protein: 0,
        carbs: 0,
        fat: 0,
        sugar: 0
    };

    let userData = {
        uid: userId,
        name: name,
        activeBMR: bmr,
        dailyCalorie: 0,
        isAdmin: false,
        nutrionalvalues: nutrionalvalues
    }
    createUser(userId, userData);

    dispatch({
        type: ADD_USER,
        payload: userData
    });

};


export const updateUserDailyCalorie = (userId, calorie, nutrionalValues) => async dispatch => {

    const userInfo = await updateDailyCalorie(userId, calorie, nutrionalValues);

    dispatch({
        type: UPDATE_USER_DAILY,
        payload: userInfo
    });

};

export const updateNegativeUserDailyCalorie = (userId, calorie, nutrionalValues) => async dispatch => {

    const userInfo = await updateNegativeDailyCalorie(userId, calorie, nutrionalValues);

    dispatch({
        type: UPDATE_USER_DAILY_NEGATIVE,
        payload: userInfo
    });

};