import React, { Component } from 'react';

import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <HomePage/>
      </MasterLayout>
      
    );
  }
}

export default App;
