import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import Root from './Root';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
