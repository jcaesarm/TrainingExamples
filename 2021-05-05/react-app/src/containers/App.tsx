import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import MasterLayout from '../UI/layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/admin" component={AdminPage} />
          <Route render={() => <PageNotFound title="Page Not Found!"/>} />
        </Switch>
      </MasterLayout>
    );
  }
}

export default App;
