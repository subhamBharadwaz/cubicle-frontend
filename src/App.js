import React from 'react';
// Import Components and Pages
import Nav from './components/navbar/Nav';
import GlobalStyle from './components/GlobalStyles';
import Home from './pages/Home';
// Router
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
