import * as actionType from '../actionType';
const initialState = {
    data:[],
    showPopup: {
        show: false,
        content: {
            title: '',
            url: ''
        }
    }
}

const weeklyNews = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_WEEKLY_NEWS:
            return ({
                ...state,
                data: action.data,
            });
        case actionType.TOGGLE_WEEKLY_NEWS_POPUP:
            return ({
                ...state,
                showPopup: {
                    ...state.showPopup,
                    show: !state.showPopup.show
                }
            })
        default:
            return ({
                ...state
            });
    }
}


export default weeklyNews;