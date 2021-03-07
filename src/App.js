import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import fire from "../src/firebase/firebase";

// Components
import Home from "./components/Pages/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { AuthenticationContext } from "./context/Authentication";

function App() {
  const history = useHistory();
  const { userSignedIn, setUserSignedIn } = useContext(AuthenticationContext);
  console.log(userSignedIn);

  const authListener = () => {
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserSignedIn(user);
      } else {
        // No user is signed in.
        setUserSignedIn(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div className="App">
      <Router>
        {userSignedIn ? <Route exact path="/" component={Home}/> : <Redirect to="/signin" />}
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
