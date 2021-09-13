import React, { Component } from 'react'
import Slider, {Range} from "rc-slider";
import {Link} from "react-router-dom";
import "rc-slider/assets/index.css";
import  "./navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";


export default class navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            format: "HEX",
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeSnakebar = this.closeSnakebar.bind(this);
    }

    handleChange(evt){
        this.setState({format: evt.target.value, open: true}, () => {
            this.props.changeFormat(this.state.format)
        });   
    }

    closeSnakebar(){
        this.setState({open: false})
    }

    render() {
        const {level, changeLevel} = this.props;
        const {format} = this.state;

        return (
            <header className="navbar">
                <div className="logo">
                    <Link to="/">React Color Picker</Link>
                </div>
                {this.props.showSlider && (
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
                )}
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="HEX">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="RGB">RGB - RGB(255, 255, 255)</MenuItem>
                        <MenuItem value="RGBA">RGBA - RGBA(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed!</span>}
                    onClose={this.closeSnakebar}
                    ContentProps = {{"aria-describedby": "message-id"}}
                    action={[
                        <IconButton onClick={this.closeSnakebar} 
                            color="inherit" 
                            key="close" 
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}
