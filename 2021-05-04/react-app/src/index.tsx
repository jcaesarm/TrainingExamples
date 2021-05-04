import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import 'fontsource-roboto';

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root') 
);