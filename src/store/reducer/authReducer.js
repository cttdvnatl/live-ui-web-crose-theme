import * as actionType from '../actionType';
const initialState = {
    token: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH:
            return({
                token: action.token
            });
        default:
            return ({
                ...state
            })
    }
}

export default authReducer;