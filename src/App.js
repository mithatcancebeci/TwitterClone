
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import UserSignUpPage from "./pages/UserSingUpPage"
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import MoreButton from "./components/MoreButton";
import LoginPage from "./pages/LoginPage";

const App = (props) => {
  return (
    <div>
      <Router>
<Nav></Nav>
      
      </Router>
    </div>
  );
};

export default App;
