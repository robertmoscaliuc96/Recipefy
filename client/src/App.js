import React, {Fragment, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Posts from './components/posts/Posts'
import Ideas from './components/Ideas/Ideas'
import Calculator from './components/calculator/Calculator'
import './App.css';

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
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>

          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <section className="container">
            <Alert/>
            <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/ideas" component={Ideas}/>
            <Route exact path="/calculator" component={Calculator}/>
            </Switch>
          </section>

        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;
