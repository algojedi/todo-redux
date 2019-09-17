import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import mainReducer from './reducers/reducer';
import {createStore} from 'redux'; 
import { devToolsEnhancer } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
// const store = createStore(mainReducer);
const store = createStore(mainReducer, devToolsEnhancer());

ReactDOM.render(
<Provider store={store}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>   
        
</Provider>



, document.getElementById('root'));


