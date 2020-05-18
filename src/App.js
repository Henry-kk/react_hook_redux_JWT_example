import React, { useEffect } from 'react';
import logo from './logo.svg';
import LoginPage  from './Pages/LoginPage';
import RegisterPage  from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './history';
import { PrivateRoute } from './components'

function App() {
  // useEffect(() =>{
  //   history.listen((location, action) => {
  //     // clear altert on location change
  //     // dispatch(altertAction.clear());
  //   })
  // }, []);

  return (
    <div>
      <Router history = { history }>
        <Switch>
          <PrivateRoute Route exact path='/' component={ HomePage }></PrivateRoute>
          <Route path='/login' component = { LoginPage }></Route> 
          <Route path='/register' component = { RegisterPage }></Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
