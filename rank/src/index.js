import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // the guy that makes redux store accessible across the React components
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { store, history } from './redux/store';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
serviceWorker.register();