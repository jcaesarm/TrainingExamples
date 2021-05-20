import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux'; 

import App from './containers/App';
import { store } from './redux/store';

//Material-UI font import
import 'fontsource-roboto';

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root') 
);