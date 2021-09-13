import './App.css';
import Pallate from './pallate';
import seedColors from './seedcolors';
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import React, {Component} from "react"
import PallateList from "./paletteList"
import SingleColorPalette from './SingleColorPalette';
 
class App extends Component {
  findPalette(id){
    return seedColors.find(palette => {
      return palette.id === id
    })
  }

  render(){
    return (
      <Switch>
        <Route exact path="/palette/:paletteId/:colorID" 
          render={routeProps => ( <SingleColorPalette 
            colorId={routeProps.match.params.colorID}
            palette={ generatePalette(this.findPalette(routeProps.match.params.paletteId))}
          />)} 
        />
        <Route exact path="/palette/:id" 
          render={routeProps => ( <Pallate palette={
            generatePalette(this.findPalette(routeProps.match.params.id))
          }/>)}
        />
        <Route exact path="/" 
          render={(routeProps) => <PallateList palettes={seedColors} {...routeProps}/>}
        />
      </Switch>
    );
  }
}

export default App;
