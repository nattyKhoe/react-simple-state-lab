import React from 'react';

class Cell extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            color: this.props.value
        }
    }
    
    changeColour = function (e){
        e.currentTarget.style.backgroundColor = '#333';
    }

    render (){
        return (
            <div className="cell" style={{backgroundColor:`${this.state.color}`}} onClick={this.changeColour}></div>
        )
    }

}

export default Cell;