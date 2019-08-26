import { Route } from 'react-router-dom';
import React, {Component} from 'react';
import classes from './Profile.module.css';
import Button from '../../Components/UI/Button/Button';
import ContentProfile from '../../Components/UI/ContentProfile/ContentProfile';
import styled from 'styled-components';


class Profile extends Component {

  render() {

    const Title = styled.h1`
      height: 30px;
      margin-top: 150px;
      text-align: center;
    `;

    return (

      <div className={classes.Profile}>
        
        <div>

          <Title>{localStorage.getItem("logged") ? 'Logged in' : 'Need to be logged'}</Title>

          <Route render={({ history}) => (
            
              <Button
                type="exit"
                onClick={() => { 
                  history.push('/Login');
                  localStorage.clear();
                }}
              >
                Выход
              </Button>

          )} />

           <div className = {classes.Content}>
              <ContentProfile />
           </div>

        </div>
      </div>
    );
  }
}

export default Profile;