import { createStore ,applyMiddleware,compose} from "redux";
import authReducer from "./authReducer";
import SecureLS from 'secure-ls'
import thunk from 'redux-thunk'
import { setAuthorizationHeaders } from "../api/apiCall";

const secureLs=new SecureLS();

 const getStateFromStorage=()=>{
    const twitterAuth = secureLs.get("twitter-auth");
    let stateInLocalStorage = {
      isLoggedIn: false,
      username: undefined,
      displayName: undefined,
      image: undefined,
      password: undefined,
    };
    if (twitterAuth) {
      
        return twitterAuth
    
    }
    return stateInLocalStorage;
 }
 const updateStateInStorage=newState=>{
    secureLs.set('twitter-auth',newState)
   

 }
 const configureStore = () => {
   const initialState=getStateFromStorage();
 setAuthorizationHeaders(initialState)
   const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    authReducer,initialState,
    composeEnhancers(applyMiddleware(thunk) ) 
  );
  store.subscribe(() => {
   updateStateInStorage(store.getState()); 
   setAuthorizationHeaders(store.getState());
  });
  return store;
};  
export default configureStore;
