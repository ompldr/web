import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';

const App = () => (
  <div className="App">
    <p>hey</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
