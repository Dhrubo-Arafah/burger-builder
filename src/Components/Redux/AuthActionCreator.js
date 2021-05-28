import axios from "axios"

export const auth = (email, password, mood) =>dispatch=> {
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
.then(response=>console.log(response))
}