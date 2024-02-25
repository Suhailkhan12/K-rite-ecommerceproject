import { USER_ACTION_TYPES } from "./user.types";


// before SAGA
// const INITIAL_STATE = {
//     currentUser: null,
// };
  
// export const userReducer = (state = INITIAL_STATE , action) => {
//     const{type, payload} = action;

//     switch(type){
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return{
//             ...state,
//             currentUser: payload
//             };
//         default:
//             // throw new Error(`Unhandled type ${type} in userReducer`);
//             return state;
//     }
// };

const INITIAL_STATE = {
    currentUser: null,
    isLoading:false,
    error:null,
};
  
export const userReducer = (state = INITIAL_STATE , action) => {
    const{type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return{
            ...state,
            currentUser: payload
            };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return{
                ...state,
                error: payload
            }
        default:
            // throw new Error(`Unhandled type ${type} in userReducer`);
            return state;
    }
};
  
