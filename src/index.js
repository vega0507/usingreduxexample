import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';


//to use redux 
import { Provider } from 'react-redux';
import { createStore, compose  } from 'redux';
import reducers from './reducers';

const componseEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers, componseEnhancers());


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);


