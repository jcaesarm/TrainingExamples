import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import queryString from 'query-string';

import MyProgress from '../../UI/Progres';
import MyCard from '../../UI/Card';
import axios from '../../axios';


interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {

}

interface IState{
  loading: boolean;
  data: {title:string, body:string} | null;
  error: any;
}

class EmailDetail extends Component<IProps> {

  state: IState = {loading: true, data:null, error:null};

  render( ) { return <EmailDetailView {...this.state} {...this.props}  /> }

  componentDidMount( ){
    // fetch id (route params) from address bar
    const id = this.props.match.params.id; 

    // fetch userId & name (query params) from address bar
    // const parsed = queryString.parse(this.props.location.search);

    axios.get(`/posts/${id}`)
      .then(response => {
        this.setState({loading: false, data:response.data, error:null})
      })
      .catch(error => this.setState({loading: false, data:null, error:error}))
  }
}
interface IProps2 extends RouteComponentProps{
  loading: boolean;
  data: {title:string, body:string} | null;
  error: any;
}
class EmailDetailView extends Component <IProps2> {

  backButtonSelectedHandler = () => {
    this.props.history.goBack();
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
    const dataJSX = <MyCard title={this.props.data?.title} body={this.props.data?.body} clicked={this.backButtonSelectedHandler}/>
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
