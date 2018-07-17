import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
const  cookies = new Cookies();

const isLoggedIn = () => cookies.get('accessToken') ? true : false;

export const PrivateRoute = ({component : Component, ...rest}) =>  (
  <Route {...rest} render={(props) => (
    isLoggedIn() == true //eslint-disable-line
    ? <Component {...props} />
    : <Redirect to='/login' />
  )}/>
)

export const AuthentionRoute = ({component : Component, ...rest}) => (
    <Route {...rest} render={(props) => (
    isLoggedIn() == false //eslint-disable-line
    ? <Component {...props} />
    : <Redirect to='/' />
  )}/>
)
