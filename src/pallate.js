import React, { Component } from 'react';
import ColorBox from './colorBox';
import "./palette.css";
import Navbar from "./navbar";
import PaletteFooter from "./PaletteFooter";

export default class pallate extends Component {
    constructor(props){
        super(props);
        this.state = {
            level: 500, 
            format: "HEX"
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }

    changeFormat(val){
        this.setState({format: val});
    }

    render() {
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;

        const colorBox = colors[level].map(color => (
            <ColorBox background={color[format]} 
                name={color.name} 
                key={color.id}
                id={color.id}
                paletteId={id}
                showLink = {true}
            />
        ));

        return (
            <div className="palette">
                <Navbar level={level} 
                    changeLevel={this.changeLevel} 
                    changeFormat={this.changeFormat}
                    showSlider={true}
                />
                <div className="palette-colors">
                    {colorBox}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
