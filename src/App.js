import './App.css';
import Pallate from './pallate';
import seedColors from './seedcolors';
import {generatePalette} from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Pallate palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
