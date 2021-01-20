
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
  HashRouter,
} from "react-router-dom";

import UserSignUpPage from "./pages/UserSingUpPage"
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import UserPage from  "./pages/UserPage"
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import MoreButton from "./components/MoreButton";

import Popover from "./components/Popover";


const App = (props) => {
  const {isLoggedIn}=useSelector((store)=>{
    return{
      isLoggedIn:store.isLoggedIn,
     
    }
  })
  return (
    <div>
  <Router>
    {isLoggedIn &&<Nav></Nav>}
<Switch>
    <Route exact path="/" component={HomePage}></Route>
    {!isLoggedIn && <Route path="/login" component={LoginPage}></Route>}
    <Route path="/signup" component={UserSignUpPage}></Route>
    <Route path="/user/:username" component={UserPage}></Route>
    <Redirect to="/"></Redirect>
</Switch>
  </Router></div>
  );
};

export default App;
