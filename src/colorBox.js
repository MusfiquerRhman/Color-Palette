import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./colorBox.css";
import {Link} from "react-router-dom";
import chroma from "chroma-js";
import {withStyles} from "@material-ui/styles"

const style = {
    colorBox: {
        height: props => props.showLink ? "25%" : "50%",
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-4px',
        "&:hover button": {
            opacity: "1"
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.2 ? "#000000" : "#FFFFFF"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.2 ? "#000000" : "#FFFFFF",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() <= 0.2 ? "#FFFFFF" : "#000000",
        width: '100px',
        position: 'absolute',
        height: '30px',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        outline: 'none',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        lineHeight: '30px',
        fontSize: '1rem',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        opacity: "0"
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        padding: '10px',
        left: '0px',
        color: '#000000',
        bottom: '0px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute'
    },
    copyMsg: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        flexDirection: 'column',
        color: '#FFFFFF',
        "& h1": {
            fontWeight: '400',
            textShadow: '1px 2px #000000',
            background: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase'
        },
        "& p": {
            fontSize: '2rem',
            fontWeight: '200'
        }
    },
    showMsg: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: 25,
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s'
    }
}
 
class colorBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        });
    }

    render() {
        const {name, background, paletteId, id, showLink, classes} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.colorBox} style={{background: background}}>
                    <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}  
                        style={{background: background}}
                    />
                    <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                        <h1>Copied</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.copyText}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(style)(colorBox);