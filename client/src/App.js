import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import SignUp from './components/SignUp';
import GlobalNav from './components/GlobalNav';
import SignIn from './components/SignIn';
import AddBand from './components/AddBand';
import { setAxiosDefaults } from './util';

class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllArtists}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route path="/artist/:id" component={Artist}/>
          <Route exact path="/addband" component={AddBand}/>
        </div>
      </Router>
    );
  }
}


export default App;
