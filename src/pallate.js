import React, { Component } from 'react';
import ColorBox from './colorBox';
import "./palette.css";
import Navbar from "./navbar"

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
        const {colors, paletteName, emoji} = this.props.palette;
        const {level, format} = this.state;

        const colorBox = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id}/>
        ));

        return (
            <div className="palette">
                <Navbar level={level} 
                    changeLevel={this.changeLevel} 
                    changeFormat={this.changeFormat}
                />
                <div className="palette-colors">
                    {colorBox}
                </div>
                <footer className="palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}
