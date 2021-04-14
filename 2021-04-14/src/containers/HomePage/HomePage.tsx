import React, { Component } from 'react'; 

import Layout from '../../layouts/Layout';

class HomePage extends Component {

    render() {
        const dataJSX = <p> Welcome! </p>
      return (
        <Layout title = "Home Page" data ={dataJSX}/>
      );
    }
  }
  
  export default HomePage;