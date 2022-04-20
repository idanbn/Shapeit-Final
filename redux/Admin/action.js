import { DeleteUserById, getAllUsers } from "../../FireBase/Admin/action";

export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';

export const ADD_USER = 'ADD_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';



export const deleteUserById = (id) => async dispatch => {

    DeleteUserById(id);

    const usersData = await getAllUsers();

    usersData.forEach(user => {
        if (user.uid === id) {
            usersData.pop(user);
        }
    });

    dispatch({
        type: DELETE_USER,
        payload: usersData
    });
};

export const fetchUsers = () => async dispatch => {

    const usersData = await getAllUsers();

    dispatch({
        type: FETCH_USERS,
        payload: usersData
    });

};

