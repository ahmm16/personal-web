import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './components/Routes';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={browserHistory} basename="/personal-web/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
