import { Component } from 'react';
import { IsEmail, IsString, Length } from 'class-validator';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import LoginForm from '../../UI/LoginForm';
import axios from '../../axios';
import {dataValidation} from '../../shared/validation';
import { authStartAction, authSuccessAction, authErrorAction} from '../../redux/actions/login';

export class AuthUserValidator {

    @IsEmail({}, {message: `Email is invalid`})
    email?: string;

    @IsString({message: `Password must be a string`})
    @Length(3, 8, {message: `Name must be between 3 - 8 characters`})
    password?: string;

}
interface Iprops {
    authenticating: boolean;
    isAuthenticated: boolean;
    error: any;
    authStartAction: any;
    authSuccessAction: any;
    authErrorAction: any;
    
}

class Login extends Component<Iprops>{
    
    onLoginClickHandler = async ( email: string, password:string) => {

        // setting up progress bar 
        this.props.authStartAction();

        //validate email & pasword here
        const errors = await dataValidation(AuthUserValidator, {email, password});

        if ( errors ) { 
            //setting the progres bar
            this.props.authErrorAction(errors);
        } else {
        //Authentication user
        axios.post(`/api/auth`, {email: email, password: password})
        .then(response => {

            if ( response.data.length ){
                this.props.authSuccessAction(response.data);
            } else{
                this.props.authErrorAction(`No user found! `);
            }
            
        })
        .catch(error => {
            this.props.authErrorAction(error);

          })
        }
    
    } 
    
    render( ) { return <LoginView {...this.props} loginHandler={this.onLoginClickHandler} /> }
}


// class Login extends Component{
    
//     state = {authenticating: false, token: null, user:null, error:null, isAuthenticated: false};
    
//     onLoginClickHandler = async ( email: string, password:string) => {

//         // setting up progress bar 
//         this.setState({authenticating: true, token: null, user:null, error:null, isAuthenticated: false})

//         //validate email & pasword here
//         const errors = await dataValidation(AuthUserValidator, {email, password});

//         if ( errors ) { 
//             console.log(`Data Valitation failed `, errors)
//             this.setState({authenticating: false, token: null, user:null, error:errors, isAuthenticated: false})
            
//         } else {
//         //Setting up pogres bar
//         this.setState({authenticating: true, token: null, user:null, error:null, isAuthenticated: false})

//         //Authentication user
//         axios.post(`/api/auth`, {email: email, password: password})
//         .then(response => {

//             if ( response.data.length ){
//                 console.log(`API Validation succesful, user found: `, response.data[1].token, response.data[0] );
//             this.setState({authenticating: false, token:response.data[1].token , user:response.data[0], error:null, isAuthenticated: true })
//             } else{
//                 console.log(`API Validation succesful, no user found: `, response.data);
//                 this.setState({authenticating: false, token:null , user:null, error:`No user found`, isAuthenticated: false })
//             }
            
//         })
//         .catch(error => {
//             console.log(`Validation failed : `, error)
//             this.setState({authenticating: false, token: null, user:null, error:error, isAuthenticated: false})
//           }  )
//         }
    
//     } 
    
//     render( ) { return <LoginView {...this.state} loginHandler={this.onLoginClickHandler} /> }
// }

interface IProps2{
    authenticating: boolean;
    isAuthenticated: boolean;
    error: any;
    loginHandler: any;
  }

class LoginView extends Component <IProps2> {
    
    render( ) {

    //
    if ( this.props.isAuthenticated) {
        return <Redirect to={`/`}/> 
    }

    return (
        <LoginForm loginHandler={this.props.loginHandler} loading={this.props.authenticating} failure={this.props.error}/>
        );
    }
}

const mapStateToProps = ( store: any) => ({
    authenticating: store.auth.authenticating,
    isAuthenticated: store.auth.isAuthenticated,
    error: store.auth.error,
});

export default connect (mapStateToProps, {authStartAction, authSuccessAction, authErrorAction} )(Login);
