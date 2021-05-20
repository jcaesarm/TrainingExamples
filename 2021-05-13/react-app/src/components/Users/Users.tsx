import { Component } from 'react';
import { connect } from 'react-redux';

import MyTable from '../../UI/Table';
import MyProgress from '../../UI/Progres';
import axios from '../../axios';
import { updateUsersAction, updateUsersErrorAction} from '../../redux/actions/users';

// ---------------API Calls from Components & State in Component---------------
// class Users extends Component {

//   state = {loading: true, data:null, error:null};

//   searchKeyPressHandler = ( event: any) => {
//     if (event.key === `Enter`){
//       const getOption = event.target.value;
//       this.fetchUsers(`/api/users?name=${getOption}`);
//     }
//   }

//   fetchUsers = ( route: string ) => {
//     axios.get(route)
//       .then(response => {
//           //modify data here
//           const users: any[] = response.data;
//           const modUsers = users.map( (user: any) => {
//               return {User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name};
//           });

//           this.setState({loading: false, data:modUsers, error:null})
//       })
//       .catch(error => this.setState({loading: false, data:null, error:error}))

//   }

//   componentDidMount( ){
//     this.fetchUsers(`/api/users`);
//   }

//   render( ) { return <UsersView {...this.state} searchHandler={this.searchKeyPressHandler}/> }
// }

// ---------------API Calls from Components & State in Redux---------------
interface IProps{
  loading: boolean;
  users: any;
  error: any;
  updateUsersAction: any;
  updateUsersErrorAction: any;
  counter: number;
}

class Users extends Component<IProps> {

  // state = {loading: true, data:null, error:null};

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
          this.props.updateUsersAction(modUsers);
          // this.setState({loading: false, data:modUsers, error:null})
      })
      .catch(error => this.props.updateUsersErrorAction(error))
      // .catch(error => this.setState({loading: false, data:null, error:error}))

  }

  componentDidMount( ){
    this.fetchUsers(`/api/users`);
  }

  render( ) { return <UsersView {...this.props} searchHandler={this.searchKeyPressHandler}/> }
}

interface IProps2{
  loading: boolean;
  users: any;
  error: any;
  searchHandler:any;
  counter: number;
}

class UsersView extends Component <IProps2> {

  renderLoading( ){
    const dataJSX = <MyProgress />
    return dataJSX;
  }

  renderError( ){
    const dataJSX = <h3>Sorry! Error ocurred...</h3>
    return dataJSX;
  }

  renderSucces( ){
    const dataJSX = (
    <>
      <h3>Counter Value : {this.props.counter}</h3>
      <MyTable rows={this.props.users} searchHandler={this.props.searchHandler} />
    </>
    )
    return dataJSX;
  }

  render( ) {
 
        if ( this.props.loading ){
          return this.renderLoading( );
        } else if ( this.props.users ){
          return this.renderSucces( );
        } else {
          return this.renderError();
        }
  }

}

const mapStateToProps = ( store: any) => ({
  loading: store.users.loading,
  users: store.users.data,
  error: store.users.error,
  counter: store.counterKey.counter 
});
  
export default connect(mapStateToProps, {updateUsersAction, updateUsersErrorAction})(Users);
