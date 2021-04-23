import axios from 'axios';
import React, { Component } from 'react';

import MyProgress from '../../UI/Progres';
import MyCard from '../../UI/Card';

interface IProps{
  loading: boolean;
  data:any;
  error:any;
}

class EmailDetail extends Component {

  state = {loading: true, data:null, error:null};

  render( ) { return <EmailDetailView {...this.state} /> }

  componentDidMount( ){

    // fetch id from address bar (route params)
    const id = 1; 

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => this.setState({loading: false, data:response.data, error:null}))
      .catch(error => this.setState({loading: true, data:null, error:error}))
  }

}

class EmailDetailView extends Component <IProps> {

  renderLoading( ){
    const dataJSX = <MyProgress />
    return dataJSX;
  }

  renderError( ){
    const dataJSX = <h3>Sorry! Error ocurred...</h3>
    return dataJSX;
  }

  renderSucces( ){
    const dataJSX = <MyCard title={this.props.data.title} body={this.props.data.body}/>
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
  
export default EmailDetail;
