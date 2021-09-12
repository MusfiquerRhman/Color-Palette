import './App.css';
import Pallate from './pallate';
import seedColors from './seedcolors';
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import React, {Component} from "react"
import PallateList from "./paletteList"
 
class App extends Component {
  findPalette(id){
    return seedColors.find(palette => {
      return palette.id === id
    })
  }

  render(){
    return (
      <Switch>
        <Route exact path="/" render={() => <PallateList palettes={seedColors}/>}/>
        <Route exact path="/palette/:id"
          render={(routeProps) => (
            <Pallate palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
          )}
        />
      </Switch>
    );
  }
}

export default App;
