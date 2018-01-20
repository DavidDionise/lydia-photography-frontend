import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from 'components';
import Routes from './routes';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Routes />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if(module.hot) {
  module.hot.accept('./routes', () => {
    render();
  });
}
