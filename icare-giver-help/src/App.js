import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Error from './components/error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import * as firebase from 'firebase';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // patients: {
      //   name: "",
      //   age: 0,
      //   address: "",
      //   gender: "",
      //   phone: 0
    // }
    speed: 19
    }
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
          <NavBar />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route component={Error} />
            </Switch> 
            <b>{this.state.speed}</b>
         </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
