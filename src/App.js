import React from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import WordResults from './pages/word-results';

function App() {
  return (
    <AppRouter>
      <Index />
      <Switch>
        <Route path='/:word' component={WordResults} exact />
      </Switch>
    </AppRouter>
  );
}

export default App;
