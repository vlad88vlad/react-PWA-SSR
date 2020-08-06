import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './appReducer';

// Compose with redux devtools extension only on development mode
const composeEnhancer = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;


const createStoreWithMiddleware = () => ({
    ...createStore(rootReducer,
        composeEnhancer(applyMiddleware(
            thunk,
        ))),

});

export default function configureStore() {
    return createStoreWithMiddleware();
}
