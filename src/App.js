import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
