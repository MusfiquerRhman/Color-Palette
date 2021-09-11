import './App.css';
import Pallate from './pallate';
import seedcolors from './seedcolors';

function App() {
  return (
    <div className="App">
      <Pallate palette={ seedcolors[4] }/>
    </div>
  );
}

export default App;
