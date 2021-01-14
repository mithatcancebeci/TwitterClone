import "./App.css";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
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
