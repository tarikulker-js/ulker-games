import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from './screens/home';
import UlkergameScreen from './screens/ulkergame';
import ulkerGamesLogo from './ulker-games-logo.jpg';


function App() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo"><img src={ulkerGamesLogo} width={167} height={53} /></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">

          </ul>
        </div>
      </nav>

      <Router>
        <Switch>

          <Route path="/com.ulker.zipzipulker">
            <UlkergameScreen />

          </Route>

          <Route path="/">
            <HomeScreen />

          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
