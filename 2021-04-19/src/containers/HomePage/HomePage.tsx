import React, {Component} from 'react';
// import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';

class HomePage extends Component {

    render() {
      // console.log('HomePage props : ', this.props);
      return (
        <Layout >
            <p>Home Component</p>
          {/* <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" component={AdminPage} />
          </Switch> */}
        </Layout>
      );
    }
  }
  
export default HomePage;