import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';
import News from './Containers/News/News';
import Login from './Containers/Login/Login';

class App extends Component {
  render() {
    
    let loginLink = <Route path="/Login" component = {Login} />;
    return (
      <div className = "App">
        <Layout>
          <Switch>
            <Route path="/News" component = {News} />
            <Route path="/Profile" component = {Profile} />
            {loginLink}
            <Route path="/" component = {Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App