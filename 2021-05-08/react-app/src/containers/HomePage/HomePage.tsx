import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../UI/layouts/Layout';
import Inbox from '../../components/Inbox/Inbox';
import EmailDetail from '../../components/Inbox/EmailDetail';

class HomePage extends Component {

    list = [
      {text: 'Inbox', path: '/home/inbox'},
      {text: 'Starred', path: '/home/Starred'}
    ];

    render() { 
      return (
        <Layout list={this.list} defaultSelected={-1}>
          <Switch>
            <Route path="/" exact render={() => <h3>Welcome to Home!</h3>} />
            <Route path="/home/inbox/:id" exact component={EmailDetail} />
            <Route path="/home/inbox" exact component={Inbox} />
            <Route path="/home/starred" render={() => <h3>Starred Component</h3>} />
          </Switch>
        </Layout>
      );
    }
  }
  
export default HomePage;