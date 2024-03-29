import React, {Fragment, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
//import Landing from './components/pages/Landing';
import './App.css';
import Login from '../src/components/auth/Login';


import Routes from './components/routing/Routes';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from '../src/utils/setAuthToken';


//import { loadUser } from './actions/auth';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App= () => {

  useEffect(() => {

    if( localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>

  );
}

export default App;
