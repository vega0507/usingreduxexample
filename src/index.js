import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';


//to use redux 
import { Provider } from 'react-redux';
import { createStore, compose  } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);


