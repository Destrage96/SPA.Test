import React, {Component} from 'react';
import classes from './Login.module.css';
import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import { Route } from 'react-router-dom';
//  import axios from 'axios';
 

export default class Login extends Component {

  state = {
    isFormValid: true,
    formControls: {
      login: {
        value: '',
        type: 'input',
        label: 'Login',
        touched: false
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        touched: false
      }
    }
  }

  loginHandler = (history) => {

    if ((this.state.formControls.login.value === "test") && (this.state.formControls.password.value === "test")) {
      localStorage.setItem("logged", true);
      history.push('/Profile');
    } else {
      alert('Не верно введён логин или пароль');
    }
  }

  submitHandler = event => {
    event.preventDefault();
  }

  onChangeHandler = (event, controlName) => {

    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

   
    control.value = event.target.value;
    control.touched = true;
    formControls[controlName] = control;
    this.setState( {formControls} );
  }

  renderInputs() {

    return Object.keys(this.state.formControls).map((controlName, index) => {

      const control = this.state.formControls[controlName];

      return (

        <Input
          key={controlName + index}
          type={control.type}
          value={controlName.value}
          touched={control.touched}
          label={control.label}
          onChange={event => this.onChangeHandler(event, controlName)}
        />

      );
    });
  }

  render() {

    return (

      <div className={classes.Login}>

        <div>

          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={classes.LoginForm}>
            
            { this.renderInputs() }

            <Route render={({ history}) => (
              <Button
                type="success"
                onClick={() => {
                  this.loginHandler(history);
                }}
                disabled={!this.state.isFormValid}
              >
                Войти
              </Button>
              
            )} />
          </form>
        </div> 
      </div>
    );
  }
}