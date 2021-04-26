import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';
import Users from '../../components/Users/Users';

class AdminPage extends Component {
 
  list = [
    {text: 'Users', path: '/admin/users'},
    {text: 'Roles', path: '/admin/roles'}
  ];
  
    render() {
      return (
        <Layout list={this.list} defaultSelected={-1} >
           <Switch>
            <Route path="/admin/users" exact render={() => <Users /> } />
            <Route path="/admin/roles" exact render={() => <h3>Roles Component</h3>} />
          </Switch>
        </Layout>
      );
    }
  }
  
export default AdminPage;