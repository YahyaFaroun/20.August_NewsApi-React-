import React from 'react';
import './App.css';
import Business from './Components/Business'
import Technik from './Components/Technik'
import Home from './Components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <Router>
        {props.children}
        <div className="App">

          <header>
            <nav>
              <ul>
                <li><Link className="nav" to="/">Home</Link></li>
                <li><Link className="nav" to="/business">Business</Link></li>
                <li><Link className="nav" to="/technik">Technik</Link></li>
                {/* <li><Link to="/technick">Technick</Link></li>
                <li><Link to="/wallstreet">Wall Street Journal</Link></li> */}
              </ul>      
            </nav>
          </header>

        
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              
              <Route path="/business">
                <Business />
              </Route>

              <Route path="/technik">
                <Technik />
              </Route>

            </Switch>
         
          

        </div>
    </Router>
  );
}

export default App;
