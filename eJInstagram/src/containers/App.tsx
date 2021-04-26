import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import MessagePage from '../containers/MessagePage/MessagePage';
import ExplorePage from '../containers/ExplorePage/ExplorePage';
import NotificationPage from './NotificationPage/NotificationPage';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/message" component={MessagePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/notification" component={NotificationPage} />
          <Route render={() => <PageNotFound title="Page Not Found!"/>} />
        </Switch>
      </MasterLayout>
    );
  }
}

export default App;
