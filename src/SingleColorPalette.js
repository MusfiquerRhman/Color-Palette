import React, { Component } from 'react'
import ColorBox from './colorBox';
import Navbar from './navbar';
import PaletteFooter from "./PaletteFooter";
import {Link} from "react-router-dom";

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShade(this.props.palette, this.props.colorId);
        this.state = {format: "HEX"};
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShade(palette, parentColor){
        let shades = [];
        let allColors = palette.colors;
        for(let i in allColors){
            shades = shades.concat(
                allColors[i].filter(color => color.id === parentColor)
            )
        }
        return shades.slice(1);
    }

    changeFormat(val){
        this.setState({format: val});
    }

    render() {
        const {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette;

        const colorBoxes = this._shades.map(color => (
            <ColorBox key = {color.name} 
                name={color.name} 
                background={color[format]} 
                showLink={false}
            />
        ))

        return (
            <div className={"singleColorPalette palette"}>
                <Navbar changeFormat={this.changeFormat} 
                    showSlider={false}
                />
                <div className={"palette-colors"}>
                    {colorBoxes}
                    <div className="colorBox go-back">
                        <Link to={`/palette/${id}`} className="back-button"> Go Back </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default SingleColorPalette;