import axios from 'axios';
import React, { Component } from 'react';

import MyPaper from '../../UI/Paper';
import MyProgress from '../../UI/Progres';

interface IProps{
  loading: boolean;
  data:any;
  error:any;
}

class Inbox extends Component {

  state = {loading: true, data:null, error:null};

  render( ) { return <InboxView {...this.state} /> }

  componentDidMount( ){

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({loading: false, data:response.data, error:null}))
      .catch(error => this.setState({loading: true, data:null, error:error}))
  }

}

class InboxView extends Component <IProps> {

  renderLoading( ){
    const dataJSX = <MyProgress />
    return dataJSX;
  }

  renderError( ){
    const dataJSX = <h3>Sorry! Error ocurred...</h3>
    return dataJSX;
  }

  renderSucces( ){
    const dataJSX = this.props.data.map( (item:any) => {
      return <MyPaper key={item.id} title={item.title} body={item.body}/>
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
