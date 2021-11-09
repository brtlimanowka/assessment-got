import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CharacterState from './store/characters/CharacterState';
import HouseState from './store/houses/HouseState';
import Characters from './components/characters/Characters';
import House from './components/houses/House';
import './App.css';

function App() {
  return (
    <CharacterState>
      <HouseState>
        <div className='App'>
          <Router>
            <Switch>
              <Route exact path='/' component={Characters} />
              <Route path='/house/:id' component={House} />
              <Route exact path='/house' render={() => <Redirect to='/' />} />
              <Route path='*' render={() => <Redirect to='/' />} />
            </Switch>
          </Router>
        </div>
      </HouseState>
    </CharacterState>
  );
}

export default App;
