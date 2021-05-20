import React, { Component } from 'react';

import MyTable from '../../UI/Table';
import MyProgress from '../../UI/Progres';
import axios from '../../axios';

class Users extends Component {

  state = {loading: true, data:null, error:null};

  searchKeyPressHandler = ( event: any) => {
    if (event.key === `Enter`){
      const getOption = event.target.value;
      this.fetchUsers(`/api/users?name=${getOption}`);
    }
  }

  fetchUsers = ( route: string ) => {
    axios.get(route)
      .then(response => {
          //modify data here
          const users: any[] = response.data;
          const modUsers = users.map( (user: any) => {
              return {User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name};
          });

          this.setState({loading: false, data:modUsers, error:null})
      })
      .catch(error => this.setState({loading: false, data:null, error:error}))

  }

  componentDidMount( ){
    this.fetchUsers(`/api/users`);
  }

  render( ) { return <UsersView {...this.state} searchHandler={this.searchKeyPressHandler}/> }
}

interface IProps{
  loading: boolean;
  data:any;
  error:any;
  searchHandler:any;
}

class UsersView extends Component <IProps> {

  renderLoading( ){
    const dataJSX = <MyProgress />
    return dataJSX;
  }

  renderError( ){
    const dataJSX = <h3>Sorry! Error ocurred...</h3>
    return dataJSX;
  }

  renderSucces( ){
    const dataJSX = <MyTable rows={this.props.data} searchHandler={this.props.searchHandler} />
    return dataJSX;
  }

  render( ) {
 
        if ( this.props.loading ){
          return this.renderLoading( );
        } else if ( this.props.data ){
          return this.renderSucces( );
        } else {
          return this.renderError();
        }
  }

}
  
export default Users;
