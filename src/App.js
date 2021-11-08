import CharacterState from './store/characters/CharacterState';
import HouseState from './store/houses/HouseState';
import Characters from './components/characters/Characters';
import './App.css';

function App() {
  return (
    <CharacterState>
      <HouseState>
        <div className='App'>
          <Characters />
        </div>
      </HouseState>
    </CharacterState>
  );
}

export default App;
