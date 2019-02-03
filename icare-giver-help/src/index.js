import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxUOhbciff4-SfSaYNnXQ1VQGgKARkfpQ",
    authDomain: "icare-giver-help.firebaseapp.com",
    databaseURL: "https://icare-giver-help.firebaseio.com",
    projectId: "icare-giver-help",
    storageBucket: "icare-giver-help.appspot.com",
    messagingSenderId: "1089123125733"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

