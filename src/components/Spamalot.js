import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
render() {
    let spamalot = []
    for(let i=0; i<500; i++) {
        spamalot.push(<Spam/>)
    }
    return(
        <div id="ex-2">{spamalot}</div>
    )
} 
}

export default Spamalot

