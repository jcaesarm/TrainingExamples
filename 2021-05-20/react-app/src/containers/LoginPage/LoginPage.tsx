import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../UI/layouts/Layout';

class LoginPage extends Component {
 
  
    render() {
      return (
        <Layout >
           <Switch>
            <Route path={`/`} component={}/>
          </Switch>
        </Layout>
      );
    }
  }
  
export default LoginPage;