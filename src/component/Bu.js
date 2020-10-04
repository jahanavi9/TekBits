import React, { Component } from 'react';

class Bu extends Component {
    constructor(props) {
        super(props);
        this.state= {color_green:true,
        }
        
    }
    changeColor(){
        this.setState({color_green:!this.state.color_green})
    }
    
    render() {
        let bgColor=this.state.color_green?this.props.color:this.props.color2
        return (
            <div>
                <button style={{backgroundColor:bgColor}}onClick={this.changeColor.bind.bind(this)}>
                    Button1</button>
                
                
            </div>
        );
    }

}

export default Bu;