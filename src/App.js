import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Twitter from "./components/Twitter/twitter"
import Reddit from "./components/Reddit/reddit"
import GitHub from "./components/GitHub/github"


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">

          <NavLink to="/twitter" activeClassName="active-nav" className="nav">Twitter</NavLink>

          <NavLink to="/github" activeClassName="active-nav" className="nav">GitHub</NavLink>

          <NavLink to="/reddit" activeClassName="active-nav" className="nav">Reddit</NavLink>

        </header>

        <Switch>
          <Route path="/twitter">
            <Twitter />
          </Route>
          <Route path="/reddit">
            <Reddit />
          </Route>
          <Route path="/github">
            <GitHub />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
