import { Component } from 'react';
import { connect } from 'react-redux';

import MyTable from '../../UI/Table';
import MyProgress from '../../UI/Progres';
import { getUsersAction} from '../../redux/actions/users';
import { deleteUsersAction } from '../../redux/actions/users';

interface IProps{
  loading: boolean;
  users: any;
  error: any;
  getUsersAction: any;
  deleteUsersAction: any;
}

class Users extends Component<IProps> {

  searchKeyPressHandler = ( event: any) => {
    if (event.key === `Enter`){
      const option = event.target.value;
      this.props.getUsersAction( option );
    }
  }

  deleteHandler = ( event: any ) => {
    if (event.type === `click`){
      // Solo elimina de forma estatica el id que se pone, in process...
      const option = 1;
      this.props.deleteUsersAction( option );
    }
  }

  componentDidMount( ){
    this.props.getUsersAction( null );
  }

  render( ) { return <UsersView {...this.props} searchHandler={this.searchKeyPressHandler} deleteHandler={this.deleteHandler}/> }

}

interface IProps2{
  loading: boolean;
  users: any;
  error: any;
  searchHandler:any;
  deleteHandler:any;
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
      <MyTable rows={this.props.users} searchHandler={this.props.searchHandler} deleteHandler={this.props.deleteHandler}/>
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
});

export default connect(mapStateToProps, {getUsersAction, deleteUsersAction})(Users);
