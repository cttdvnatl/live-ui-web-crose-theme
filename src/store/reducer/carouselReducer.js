import * as actionType from '../actionType';
const initialState = {
    data:[]
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_SLIDES:
            return ({
                data: action.data
            });
        default:
            return ({
                ...state
            });
    }
}


export default carouselReducer;