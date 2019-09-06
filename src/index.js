import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import mainReducer from './reducers/reducer';
import {createStore} from 'redux'; 
import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(mainReducer);
const store = createStore(mainReducer, devToolsEnhancer());

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>



, document.getElementById('root'));


