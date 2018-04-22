
import React from "react";

// Functional component
 function Title_old(props) {
    // JSX 
    // props.newProp = "adas",
    return <h1>{props.name} {props.lastName} </h1>;
    // return React.createElement('h1', {})
}

// class based component
export default class Title extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <h3 style={{color: "red"}}>
            {this.props.children}
        </h3>;
    }
}

// <Title>asdasdafe adas</Title>