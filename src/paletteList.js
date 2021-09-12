import React, { Component } from 'react'
import MiniPalette from './miniPalette';
import {withStyles} from "@material-ui/styles"

const style = {
    root: {
        backgroundColor: "teal",
        height: "100%",
        display: "flex",
        alignItem: "flex-start",
        justifyContent: "center"
    }, 
    container: {
        width: "50%",
        display: "flex",
        alignItem: "flex-start",
        flexDirection: "column",
        flexWrap : "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "#FFFFFF"
    },
    palette: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

class paletteList extends Component {
    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palette}>
                        {palettes.map(palette => (
                            <MiniPalette {...palette}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(paletteList)