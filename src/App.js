import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
  HashRouter,
} from "react-router-dom";

import UserSignUpPage from "./pages/UserSingUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import './App.css'

import SearchOnTwitter from "./components/SearchOnTwitter";
import Nav from "./components/Nav/Nav";

function App(){
  const { isLoggedIn } = useSelector((store) => {
    return {
      isLoggedIn: store.isLoggedIn,
    };
  });
  return (
    <div className="app">
      <Router> <Switch>
        
          <div className="row align-items-start">
            {isLoggedIn && (
              <>
             
                <div className="col">
               <Nav/>
               
                </div>
                <div className="col">
               
                 
                    <Route exact path="/" component={HomePage}></Route>
                 
                </div>
                <div className="col">
                  <SearchOnTwitter></SearchOnTwitter>
                </div>
              </>
            )}
 
            {!isLoggedIn && <><Route path="/login" component={LoginPage}></Route></>}
           <Route path="/signup" component={UserSignUpPage}> </Route>
          </div>
         </Switch>
      </Router>
    </div>
  );
};

export default App;
