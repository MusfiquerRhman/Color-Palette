import React from 'react';
import {withStyles} from "@material-ui/styles"

const style = {
    root: {
        backgroundColor: "#FFFFFF",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        border: "1px solid #000000",
        "&:hover": {
            coursor: "pointer" 
        }
    },
    color: {
        backgroundColor: "#DAE1E4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "#000000",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props;
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} 
            key={color.name}
            style={{backgroundColor: color.color}}
        />
    ))

    return(
        <div className={classes.root}>
            <div className={classes.color}>
                {miniColorBoxes}
            </div>
            <h1 className={classes.title}>{paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h1>
        </div>
    )
}

export default withStyles(style)(MiniPalette);