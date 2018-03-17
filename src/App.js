import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import Header from './component/header/header.js'
import Index from './component/index/index.js'
import Tab from './component/tab/tab.js'
import Upvote from './component/upvote/upvote.js'
// import Detaile from './component/detaile/detaile.js'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="all">
     <Header></Header>
     	<Tab></Tab>
       <Switch>
       <Route exact path="/index" component= {Index}></Route>
       <Route path='/upvote' component={Upvote}></Route>
       <Redirect from="/*" to="/index"></Redirect>
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
