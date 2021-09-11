import React, { Component } from 'react'
import ColorBox from './colorBox'
import "./palette.css";

export default class pallate extends Component {
    render() {
        const colorBox = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ));

        return (
            <div className="palette">
                <div className="palette-colors">
                    {colorBox}
                </div>
            </div>
        )
    }
}
