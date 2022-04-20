const DRAWER_OPEN = 'DRAWER_OPEN';

const initialState = {
    drawerOpen : false,
}

export const setDrawerVisabilty = () => dispatch => {
    dispatch({
        type: DRAWER_OPEN,
    });

};

const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        //current user
        case DRAWER_OPEN:
            return { ...state, drawerOpen: !state.drawerOpen };

    }
    return state;
}

export default drawerReducer;