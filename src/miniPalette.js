import React from 'react';
import {withStyles} from "@material-ui/styles"

const style = {
    root: {
        backgroundColor: "#FFFFFF",
        borderRadius: "5px",
        padding: "0.5rem",
        possition: "relative",
        overflow: "hidden",
        border: "1px solid #000000",
        "&:hover": {
            coursor: "pointer" 
        }
    },
    color: {
        backgroundColor: "gray"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        margin: "0",
        color: "#000000",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        possition: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    }
}

function MiniPalette(props){
    const {classes, paletteName, emoji} = props;
    return(
        <div className={classes.root}>
            <div className={classes.color}>
            </div>
            <h1 className={classes.title}>{paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h1>
        </div>
    )
}

export default withStyles(style)(MiniPalette);