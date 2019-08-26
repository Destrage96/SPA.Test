import React, {Component} from 'react';
import classes from './Drawer.module.css';
import {NavLink, Route} from 'react-router-dom';


const links = [
  {label: function(isLogin) {return isLogin ? 'Profile' : 'Login'}, exact: false, getLink: function(isLogin){ return isLogin ? '/Profile' : '/Login'}},
  {label: function(isLogin) { return 'News'}, exact: false, getLink: function(isLogin){ return '/News'}},
  {label: function(isLogin) {return 'Home'}, exact: true, getLink: function(isLogin){ return '/'}}
];

class Drawer extends Component {

  renderLinks() {

    return links.map((link, index) => {
      
        return (
          
          <Route 
            key = {index}
            render={({ history}) => (
              <li>

                <NavLink
                  to={link.getLink(localStorage.getItem("logged"))}
                  exact={link.exact}
                  activeClassName={classes.active}
                >
                  {link.label(localStorage.getItem("logged"))}
                </NavLink>

              </li>
          )} />
        )}
    );
  }

  render() {

    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>

        <nav className = {cls.join( ' ' )}>
          <ul>
            {this.renderLinks() }
          </ul>
        </nav>

      </React.Fragment>
     
    );
  }
}

export default Drawer;