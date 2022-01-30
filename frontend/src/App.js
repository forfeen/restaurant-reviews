import React from 'react';
import {
  BrowserRouter,
  Switch, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AddReview from './components/add-review';
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/restaurants" className="navbar-brand">
            Restaurant Reviews
      </a>
      <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href className="nav-link">
              Restaurants
            </a>
          </li>
          <li className="nav-item" >
            { user ? (
              <a href onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (            
            <a href className="nav-link">
              Login
            </a>
            )}
          </li>
        </div>
    </nav>

    <div className="container mt-3">
        {/* <Route/> */}
        <RestaurantsList />

        <Restaurant />
        {/* <Switch> 

          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>  */}
      </div>
    </div>
  );
}

export default App;
