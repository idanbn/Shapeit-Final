const DRAWER_OPEN = 'DRAWER_OPEN';
const CLOSE_IF_OPEN = 'CLOSE_IF_OPEN';
const initialState = {
    drawerOpen: false,
}

export const closeIfOpen = () => dispatch => {
    dispatch({
        type: CLOSE_IF_OPEN,
    });
};


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
        case CLOSE_IF_OPEN:
            return { ...state, drawerOpen: false };
    }
    return state;
}

export default drawerReducer;