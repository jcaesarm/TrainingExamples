import {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../UI/layouts/Layout';
import Users from '../../components/Users/Users';

class AdminPage extends Component {

    render() {
      return (
        <Layout >
           <Switch>
            <Route path="/" exact render={() => <Users /> } />
          </Switch>
        </Layout>
      );
    }
  }
  
export default AdminPage;
