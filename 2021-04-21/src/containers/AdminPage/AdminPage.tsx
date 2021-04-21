import React, {Component} from 'react';

import Layout from '../../layouts/Layout';

class AdminPage extends Component {
 
  list = [
    {text: 'Users', path: ''},
    {text: 'Admin', path: ''}
  ];
  
    render() {
      return (
        <Layout list={this.list} defaultSelected={-1} >
            <p>Admin Component</p>
        </Layout>
      );
    }
  }
  
export default AdminPage;