const SET_MENU_STATE = 'SET_MENU_STATE';

export const setMenuState = (_state) => ({
    type: SET_MENU_STATE,
    state: _state
})


const ACTION_HANDLERS = {
    [SET_MENU_STATE]: (state, action) => {
        return {
            ...state,
            show: action.state
        }
    }
}

const initialState = {
    show: true
}

const menuReducer = ((state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
})

export default  menuReducer;

