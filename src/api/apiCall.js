import axios from 'axios'


export const signup=(body)=>{
        return axios.post("/api/1.0/addUser",body)
} 
export const login=(cred)=>{
        return axios.post("/api/1.0/auth", {},{auth:cred})
        
}