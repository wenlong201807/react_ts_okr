import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
import App from './App';

// import store from './views/Redux/store';
// const store = { test: 'wenlong' };

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    // <Provider store={store}>
    //     <App />
    // </Provider>,
    document.querySelector('#root'),
);
