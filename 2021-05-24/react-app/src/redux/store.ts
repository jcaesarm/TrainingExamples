import { createStore, combineReducers, applyMiddleware} from 'redux';

// TODO: Remove this for production
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers
import counterReducer from './reducers/counter';
import usersReducer from './reducers/users';
import loginReducer from './reducers/login';

// Import middlewares
import { usersMdl } from './middleware/users';

// Combine all reducers
const combineReducer = combineReducers({
    counterKey: counterReducer,
    users: usersReducer,
    auth: loginReducer
});

// Combine al middleware
const combineMiddlewares = [...usersMdl];

// Create Central Store
export const store = createStore(
    combineReducer,
    composeWithDevTools(applyMiddleware(...combineMiddlewares))
);