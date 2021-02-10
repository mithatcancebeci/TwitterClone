import * as ACTIONS from './Constants'
import { login, signup} from '../api/apiCall'
export const logoutSuccess=()=>{

    return {
        type:ACTIONS.LOGOUT_SUCCESS
    }
}
export const loginSuccess=(authState)=>{
    return {
        type:ACTIONS.LOGIN_SUCCESS,payload:authState  
    }
}
export const updateSuccess=({displayName,image,bgImage,description})=>{
 return {
   type:ACTIONS.UPDATE_SUCCESS,
   payload: {
     displayName,
     image,
     bgImage,
     description
   }
 }
}
export const loginHandler=(credentials)=>{
    return async function (dispatch){
        const response =await login(credentials)
        const authState={
            ...response.data,
            password:credentials.password
        };
        dispatch(loginSuccess(authState))
    return response;
    }
    
}

export const singupHandler=(user)=>{
  return async function(dispatch){
    const response=await signup(user);
    await dispatch(loginHandler(user));
    return response
  }
}