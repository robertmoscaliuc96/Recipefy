import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Posts from '../posts/Posts';
import Calculator from '../calculator/Calculator'
import Ideas from '../Ideas/Ideas'
//import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/NotFound';

const Routes = () => {

    return (
        <section className='container'>
            <Alert/>
            <Switch>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/posts' component={Posts}/>        
                <Route exact path='/ideas' component={Ideas} />
                <Route exact path='/calculator' component={Calculator} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )

};
export default Routes;


//     <Route exact path='/posts/:id' component={Post} />