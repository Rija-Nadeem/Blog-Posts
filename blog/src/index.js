import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const store= createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.querySelector('#root')
);