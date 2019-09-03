import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { mainReducer} from './reducer';
import {createStore} from 'redux'; 

const store = createStore(mainReducer);

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>



, document.getElementById('root'));


