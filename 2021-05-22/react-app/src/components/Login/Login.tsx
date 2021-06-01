import { Component } from 'react';

import LoginForm from '../../UI/LoginForm';


class Login extends Component{

    onLoginClickHandler = ( email: string, password:string) => {
        console.log(`Login email & password : `, email, password);
    } 

  render( ) { return <LoginView {...this.props} loginHandler={this.onLoginClickHandler} /> }
}

interface IProps2{
    loginHandler: any;
  }

class LoginView extends Component <IProps2> {
  
  render( ) {
    return (
    <LoginForm loginHandler={this.props.loginHandler}/>
    );
}
}
  
export default Login;
