import React from 'react'
import Spinner from './Spinner';

const Button1 = ({txt, action, load, spin}) => {

    switch (load) {
        case 'load':
            return (
                <button type='submit' style={{...style, backgroundColor: spin ? "GrayText" : 'black'}} disabled={spin} onClick={action}>
                    <p>{spin ? "wait..." : txt}</p>{<Spinner spin={spin} />}
                </button>
            )
        case 'normal':
            return (
                <button type='button' style={{...style, backgroundColor: 'black'}} onClick={action}>
                    {txt}
                </button>
            )
    
        default:
            break;
    }
}

const style = {
    width: '90%',
    margin: 'auto',
    minWidth: '10rem',
    height: '2.5em',
    display: 'grid',
    gridAutoFlow: 'column',
    lineHeight: '2.5em',
    justifyContent: 'center',
    fontSize: "1rem",
    color: 'white',
}

export default Button1