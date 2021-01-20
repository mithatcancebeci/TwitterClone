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
import UserPage from "./pages/UserPage";
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import MoreButton from "./components/MoreButton";

import Popover from "./components/Popover";
import SearchOnTwitter from "./components/SearchOnTwitter";

const App = (props) => {
  const { isLoggedIn } = useSelector((store) => {
    return {
      isLoggedIn: store.isLoggedIn,
    };
  });
  return (
    <div>
      <Router>
        <div class="container">
          <div class="row align-items-start">
            {isLoggedIn && (
              <>
             
                <div className="col">
               
                  <Nav></Nav>
                </div>
                <div className="col">
               
                  <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                  </Switch>
                </div>
                <div className="col">
                  <SearchOnTwitter></SearchOnTwitter>
                </div>
              </>
            )}

            {!isLoggedIn && <Route path="/login" component={LoginPage}></Route>}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
