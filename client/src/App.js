import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import './App.css';

//Redux
import {Provider} from 'react-redux';
import store from './store';
//import { loadUser } from './actions/auth';

const App= () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>

          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <section className="container">
            <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            </Switch>
          </section>

        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;
