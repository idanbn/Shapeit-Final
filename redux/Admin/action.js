import { getAllUsers } from "../../FireBase/Admin/action";

export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const GET_USER_BY_ID = 'GET_USER_BY_ID';



const deleteUserById = async (id) => {


}

export const fetchUsers = () => async dispatch => {

    const usersData = await getAllUsers();

    dispatch({
        type: FETCH_USERS,
        payload: usersData
    });

};

