import axios from "axios"
import { AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "./ActionType"

export const authSuccess = (token, userId) => {
 return{
  type: AUTH_SUCCESS,
   payload: {
    token: token,
    userId: userId,
   }
 }
}

export const auth = (email, password, mood) => dispatch => {
  dispatch(authLoading(true));
 const authData = {
  email: email,
  password: password,
  returnSecureToken: true,
  }
  
 let authUrl = null;
 const API_KEY = "AIzaSyBoEQbTnlmm26YPPJqRA7QHhZD3Tijk5Y4";
 if (mood === "Sign Up") {
  authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
 } else {
  authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
 }
 axios.post(authUrl + API_KEY, authData)
   .then(response => {
     dispatch(authLoading(false));
     localStorage.setItem('token', response.data.idToken)
     localStorage.setItem('userId', response.data.localId)
     const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000)
     localStorage.setItem('expirationTime', expirationTime)
   dispatch(authSuccess(response.data.idToken, response.data.localId));
   })
   .catch(err => {
     dispatch(authLoading(false));
     console.log(err.response.data.errors.message);
  })
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationTime');
  return {
    type:AUTH_LOGOUT
  }
}

export const authCheck = () => dispatch => {
  const token = localStorage.getItem('token')
  if (!token) {
    dispatch(logout());
  } else {
    const expirationTime = new Date(localStorage.getItem('expirationTime'));
    if (expirationTime <= new Date()) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId));
    }
  }
}

export const authLoading = isLoading => {
  return {
    type: AUTH_LOADING,
    payload:isLoading,
  }
}