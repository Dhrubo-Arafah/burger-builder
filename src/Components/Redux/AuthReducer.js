import { AUTH_SUCCESS } from "./ActionType"

const initialState = {
token: null,
 userId: null,
}

const AuthReducer = (state = initialState, action) => {
 switch (action.type) {
  case AUTH_SUCCESS:
   return {
    ...state,
    token: action.payload.token,
    userId: action.payload.userId
   }
  
  default: return state;
 }
}

export default AuthReducer