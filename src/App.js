import './App.css';
import Pallate from './pallate';
import seedColors from './seedcolors';

function App() {
  return (
    <div className="App">
      <Pallate { ...seedColors[4] }/>
    </div>
  );
}

export default App;
