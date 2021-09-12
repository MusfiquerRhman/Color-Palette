import React, { Component } from 'react'
import Slider, {Range} from "rc-slider";
import "rc-slider/assets/index.css";
import  "./navbar.css";
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

export default class navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "HEX"}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({format: evt.target.value}, () => {
            this.props.changeFormat(this.state.format)
        });   
    }

    render() {
        const {level, changeLevel} = this.props;
        const {format} = this.state;

        return (
            <header className="navbar">
                <div className="logo">
                    <a href="#">React Color Picker</a>
                </div>
                <div className="slider-container">
                    <span>Darkness Level: {level} </span>
                    <div className="slider">
                        <Slider defaultValue={level}
                            min={100} 
                            max={900} 
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="HEX">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="RGB">RGB - RGB(255, 255, 255)</MenuItem>
                        <MenuItem value="RGBA">RGBA - RGBA(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}
