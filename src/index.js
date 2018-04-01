import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase'
import reducer from './reducers';
import { logUser } from './actions'

import App from './component/App';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    //console.log('user has signed in or up', user);
    browserHistory.push('/app');
    const {email} = user;
    store.dispatch(logUser(email));
  } else{
    //console.log('user has signed out or still needs to sign in');
    browserHistory.replace('/signIn');
  }
})

ReactDom.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>,  document.getElementById('root')

)
