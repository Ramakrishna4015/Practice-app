import React from "react";
function FunctionalProps(props){
    return(
        <div>
        <h2>this is functional Component</h2>
        <p>hello{props.name} from {props.place}</p>
        </div>
    );
}

export default FunctionalProps;