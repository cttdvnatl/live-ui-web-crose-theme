import * as actionType from '../actionType';
import * as formType from '../formType';
const initialState = {
    allSoulReq:{
        memberId: "",
        requestor:"",
        email:"",
        soulName:""
    }
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.UPDATE_FORM_DATA:
            switch (action.formType) {
                case formType.ALL_SOUL_REQ:
                    return ({
                        ...state,
                        allSoulReq: {
                            ...action.updateData
                        }
                    });
                default:
                    break
            }
            break;
        default:
            break;
    }
    return ({
        ...state
    });
}


export default formReducer;