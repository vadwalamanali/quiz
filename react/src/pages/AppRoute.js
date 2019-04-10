import React from 'react'
import { render } from 'react-dom'
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../components/authContext/AuthContext'
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute'

const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk'],
});

const AsyncTest = Loadable({
  loader: () => import('./Test'),
  loading: () => <div>loading...</div>,
  modules: ['aboutChunk'],
});

const AsyncLogin = Loadable({
  loader: () => import('./Login'),
  loading: () => <div>loading...</div>,
  modules: ['loginChunk'],
});





const AppRoute = () => (
  <AuthProvider>
    <Switch>
      <ProtectedRoute path="/test" component={AsyncTest} />
      <Route exact path='/' component={AsyncHome} />
      <Route path="/login" component={AsyncLogin} />
    </Switch>
  </AuthProvider>
);


export default AppRoute;
