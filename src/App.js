
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import UserSignUpPage from "./pages/UserSingUpPage"
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import UserPage from  "./pages/UserPage"
const App = (props) => {
  return (
    <div>
      <Router>
        <Switch> 
<Route exact path="/" component={HomePage}></Route>
<Route path="/login" component={LoginPage}></Route>
<Route path="/signup"  component={UserSignUpPage}></Route>
<Route path="/user/:username" component={UserPage}></Route>
<Redirect to="/"></Redirect> </Switch>
      </Router>
    </div>
  );
};

export default App;
