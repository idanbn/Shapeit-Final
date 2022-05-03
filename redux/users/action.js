export const ADD_USER = 'ADD_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const UPDATE_USER_DAILY = 'UPDATE_USER_DAILY';
export const UPDATE_USER_DAILY_NEGATIVE = 'UPDATE_USER_DAILY_NEGATIVE';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_USER_NAME = 'UPDATE_USER';
export const UPDATE_USER_BMR = 'UPDATE_USER_BMR';

import { createUser, getUserById, updateBMR, updateDailyCalorie, updateLastSignin, updateName, updateNegativeDailyCalorie, updateUserPhoto } from "../../FireBase/FireStore/Users/action";


export const getUser = (uid, lastSignIn) => async dispatch => {

    updateLastSignin(uid, lastSignIn);
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
    var today = new Date();
    // const date = new Date(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`)
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let userData = {
        uid: userId,
        name: name,
        activeBMR: bmr,
        dailyCalorie: 0,
        isAdmin: false,
        nutrionalvalues: nutrionalvalues,
        lastSignIn: date,

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

export const updateUserImg = (uid, photoURL) => async dispatch => {
    const userInfo = await updateUserPhoto(uid, photoURL);

    dispatch({
        type: UPDATE_IMAGE,
        payload: userInfo
    });

};

export const updateUserName = (uid, name) => async dispatch => {
    const userInfo = await updateName(uid, name);

    dispatch({
        type: UPDATE_USER_NAME,
        payload: userInfo
    });

};

export const updateUserBMR = (uid, BMR) => async dispatch => {
    const userInfo = await updateBMR(uid, BMR);

    dispatch({
        type: UPDATE_USER_BMR,
        payload: userInfo
    });

};