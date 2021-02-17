import {
  Route,
  HashRouter as Router ,
  Redirect,
  Switch,
  HashRouter,
} from "react-router-dom";

import UserSignUpPage from "./pages/UserSingUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import "./App.css";

import UserPage from "./pages/UserPage";
import Nav from "./components/Nav/Nav";
import Tweets from "./pages/Tweets";
import MessagePage from "./pages/MessagePage";

function App() {
  const { isLoggedIn} = useSelector((store) => {
    return {
      isLoggedIn: store.isLoggedIn,

    };
  });
  return (
    <div className="app">
      <Router>
        {" "}
       <Switch><>
          {isLoggedIn && (
            <>
            <div className="menu">
                <Nav />
            </div>
             <div className="main">
               <Route exact path="/" component={HomePage}></Route>
               <Route exact path="/messages" component={MessagePage}></Route>
               <Route exact path= "/user/:username" component={UserPage}></Route>
               <Route exact path="/tweet/:id" component={Tweets}></Route>
             </div>
             <div className="widgets">
               
             </div>
              
      
            </>
          )}

          {!isLoggedIn && (
            <>
              <Route path="/login" component={LoginPage}></Route>
            </>
          )}
          <Route path="/signup" component={UserSignUpPage}>
            {" "}
          </Route>
              </></Switch>
      </Router>
    </div>
  );
}

export default App;
