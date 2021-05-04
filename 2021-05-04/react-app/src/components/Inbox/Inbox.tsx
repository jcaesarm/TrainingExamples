import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MyPaper from '../../UI/Paper';
import MyProgress from '../../UI/Progres';
import axios from '../../axios';

interface IProps extends RouteComponentProps{

}

interface IState{
  loading: boolean;
  data: {}[] | null;
  error: any;
}

class Inbox extends Component <IProps>{

  state: IState = {loading: true, data:null, error:null};

  render( ) { return <InboxView {...this.state} {...this.props} /> }

  componentDidMount( ){
    axios.get(`/posts`)
      .then(response => {
        this.setState({loading: false, data:response.data, error:null})
      })
      .catch(error => this.setState({loading: false, data:null, error:error}))
  }
}

interface IProps2 extends RouteComponentProps{
  loading: boolean;
  data: {}[] | null;
  error: any;
}

class InboxView extends Component <IProps2> {

  mailSelectedHandler = ( id:string, userId:string ) => {
    this.props.history.push( {pathname: `/home/inbox/${id}`, search:`?userId=${userId}&name=steve` } );
  }

  renderLoading( ){
    const dataJSX = <MyProgress />
    return dataJSX; 
  }

  renderError( ){
    const dataJSX = <h3>Sorry! Error ocurred...</h3>
    return dataJSX;
  }

  renderSucces( ){
    const dataJSX = this.props.data?.map( (item:any) => {
      return <MyPaper key={item.id} title={item.title} body={item.body} clicked={ () => this.mailSelectedHandler(item.id, item.userId)}/>
    })
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
  
export default Inbox;
