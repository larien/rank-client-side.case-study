import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, history } from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route path="/reviews" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.register();