
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
const App = (props) => {
  return (
    <div>
      <Router>
<UserSignUpPage></UserSignUpPage>
      
      </Router>
    </div>
  );
};

export default App;
