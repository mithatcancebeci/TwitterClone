
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
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import MoreButton from "./components/MoreButton";
import Picker from "./components/Picker";
const App = (props) => {
  const {isLoggedIn}=useSelector((store)=>{
    return{
      isLoggedIn:store.isLoggedIn,
     
    }
  })
  return (
   <Router>
<Nav></Nav>
    </Router>
  );
};

export default App;
