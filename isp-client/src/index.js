import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
