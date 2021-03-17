import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// User provider
import { UserProvider } from './context/user.context'
// Routes
import Routes from './components/Routes';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={browserHistory} >
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
