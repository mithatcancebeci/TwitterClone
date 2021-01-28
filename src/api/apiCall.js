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
export const getUsers=(page=0,size=5)=>{
  return axios.get(`/api/1.0/getUsers?currentPage=${page}&pageSize=${size}`);
}
export const getUser=(username)=>{
  return axios.get(`/api/1.0/getUsers/${username}`)
}
export const postTweet=(tweet)=>{
  return axios.post(`/api/1.0/addTweet`,tweet)
}
export const getTweet=(page=0,size=10)=>{
  return axios.get(`/api/1.0/tweets?currentPage=${page}&pageSize=${size}`)
}