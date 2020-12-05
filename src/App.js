import React from 'react';
import './App.css';

import { Topbar } from './components';
import AppRoute from './routes/AppRoute';

const App = () => {
  return (
    <>
      <Topbar />
      <AppRoute />
    </>
  );
}

export default App;
