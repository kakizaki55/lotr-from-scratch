import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="browser-router">
        <header className="nav-options">
          <NavLink to="/">Main</NavLink>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/books">Books</NavLink>
        </header>
        <div>
          <Switch className="switch-pages">
            <Route exact path="/">
              <Main></Main>
            </Route>
            <Route path="/films">
              <Films></Films>
            </Route>
            <Route path="/characters">
              <Characters></Characters>
            </Route>
            <Route path="/books">
              <Books></Books>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
