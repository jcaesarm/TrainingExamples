import {Component} from 'react';

import Layout2 from '../../UI/layouts/Layout2';
import Login from '../../components/Login/Login';

class LoginPage extends Component {

    render() {
      return (
        <Layout2>
            <Login/>
        </Layout2>
      );
    }
  }
  
export default LoginPage;