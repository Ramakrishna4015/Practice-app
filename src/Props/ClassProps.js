import React from "react";

 class ClassProps extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello{this.props.name} Welcome to {this.props.place}</h1>
                <p>{this.props.children}</p> {/* for child Components */}
            </div>

        )
    }
}
export default ClassProps