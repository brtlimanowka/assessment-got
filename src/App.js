import CharacterState from './store/characters/CharacterState';
import Characters from './components/characters/Characters';
import './App.css';

function App() {
  return (
    <CharacterState>
      <div className='App'>
        <Characters />
      </div>
    </CharacterState>
  );
}

export default App;
