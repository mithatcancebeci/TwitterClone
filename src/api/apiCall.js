import axios from "axios";

export const signup = (body) => {
  return axios.post("/api/1.0/addUser", body);
};
export const login = (cred) => {
  return axios.post("/api/1.0/auth", {}, { auth: cred });
};
export const setAuthorizationHeaders = ({ username, password, isLoggedIn }) => {
  if (isLoggedIn) {
    const authorizationHeaderValue = `Basic ${btoa(username + ":" + password)}`;
    axios.defaults.headers["Authorization"] = authorizationHeaderValue;
  } else {
    delete axios.defaults.headers["Authorization"];
  }
};
export const getUsers = (page = 0) => {
  return axios.get(`/api/1.0/getUsers?page=${page}`);
};
export const getUser = (username) => {
  return axios.get(`/api/1.0/user/${username}`);
};
export const postTweet = (tweet) => {
  return axios.post(`/api/1.0/addTweet`, tweet);
};
export const getTweet = (username, page = 0) => {
  const path = username
    ? `/api/1.0/user/${username}/tweets?page=`
    : '/api/1.0/tweets?page=';
  return axios.get(path + page);
};
export const postTweetAttachment = (attachment) => {
  return axios.post("/api/1.0/tweet-attachments", attachment);
};
export const postReplyAttachment = (attachments) => {
  return axios.post(`/api/1.0/reply-attachments`, attachments);
};

export const postLike = (id, body) => {
  return axios.post(`/api/1.0/likes/${id}`, body);
};
export const postReply = (id, body) => {
  return axios.post(`/api/1.0/postReply/${id}`, body);
};

export const updateUser =(username,body)=>{
return axios.put(`/api/1.0/user/${username}`,body)

}
export const getReplies=(username,id,page=0)=>{
  const path= username? `/api/1.0/user/${username}/replies?page=`:`/api/1.0/replies/${id}?page=`
  return axios.get(path+page)
}

export const oneTweet = (id)=>{
  return axios.get(`/api/1.0/tweet/${id}`)
}
export const getOneReply=(id)=>{
  return axios.get(`/api/1.0/reply/${id}`)
}

