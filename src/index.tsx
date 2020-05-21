import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import history from './historys';

// import { Provider } from 'react-redux';
import App from './App';

// import store from './views/Redux/store';
// const store = { test: 'wenlong' };

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    // <Provider store={store}>
    //     <App />
    // </Provider>,
    document.querySelector('#root'),
);
