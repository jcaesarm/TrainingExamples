import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';
import Inbox from '../../components/Inbox/Inbox';

class HomePage extends Component {

    render() { 
      return (
        <Layout list={['Inbox', 'Starred']} >
          <Switch>
            <Route path="/" exact render={() => <h3>Welcome to Home!</h3>} />
            <Route path="/home/inbox" exact render={() => <Inbox />} />
            <Route path="/home/starred" exact render={() => <h3>Starred Component</h3>} />
          </Switch>
        </Layout>
      );
    }
  }
  
export default HomePage;