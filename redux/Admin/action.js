import { DeleteUserById, getAllUsers, updatePermission } from "../../FireBase/Admin/action";

export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_PERMISSION = 'UPDATE_PERMISSION';



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

export const updateUserPermission = (id, Permission) => async dispatch => {

    updatePermission(id, Permission);
    const usersData = await getAllUsers();

    dispatch({
        type: UPDATE_PERMISSION,
        payload: usersData
    });
}


