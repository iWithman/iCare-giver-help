import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dahboard'
import AddPatient from './components/patients/AddPatient'
import PatientDetails from './components/patients/PatientDetails'

import Home from './components/landing/Home';
import NavBar from './components/NavBar';
import Error from './components/error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import * as firebase from 'firebase';

import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  handleLogin = (isLoggedIn) => {
    this.setState(
      {
        loggedIn: !isLoggedIn
      }
    )
  }

  handleLogOut = () => {
    this.setState(
      {
        loggedIn: true
      }
    )
    console.log(this.state)
  }

  componentDidMount(){
    // const ref = firebase.database().collection('patients').doc();
    // ref.get().then((doc) => {
    //   if (doc.exists) {
    //     this.setState({
    //       board: doc.data(),
    //       key: doc.id,
    //       isLoading: false
    //     });
    //   } else {
    //     console.log("No such document!");
    //   }
    // });

    const db = firebase.database().ref('items');
    const dbSpeed = db.child('speed');
    dbSpeed.on('value', snap => {
      console.log("snap value " + snap.val())
      this.setState({
        speed: snap.val()
      });
    });
    
  };
  render() {
    
    return (
      
      <BrowserRouter>
         <div>
          <NavBar isLoggedIn={this.state.loggedIn} onLogout={this.handleLogOut}/>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/login" render={() => <Login onLogin={this.handleLogin} /> }  />
              <Route path="/signup" component={SignUp} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/add' component={AddPatient} />
              <Route path='/patient/:id' component={PatientDetails} />
              <Route path='/*' component={Error} />
            </Switch> 
            {/* <b>{this.state.speed}</b> */}
         </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
