import axios from 'axios'


export const signup=(body)=>{
        return axios.post("/api/1.0/addUser",body)
} 
export const login=(cred)=>{
        return axios.post("/api/1.0/auth", {},{auth:cred})
        
}
export const setAuthorizationHeaders = ({ username, password, isLoggedIn }) => {
        if (isLoggedIn) {
          const authorizationHeaderValue = `Basic ${btoa(username + ":" + password)}`;
          axios.defaults.headers["Authorization"] = authorizationHeaderValue;
        } else {
          delete axios.defaults.headers["Authorization"];
        }
      };