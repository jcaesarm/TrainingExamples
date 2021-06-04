import {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import MasterLayout from '../UI/layouts/MasterLayout';
import AdminPage from '../containers/AdminPage/AdminPage';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={AdminPage} />
        </Switch>
      </MasterLayout>
    );
  }
}

export default App;
