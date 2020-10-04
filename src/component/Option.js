import React, { Component } from 'react';

import axios from 'axios';
import Bu from './Bu';

class Qandans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question:String,
            answer: String,
            optiona:String,
            optionb:String

            
        };
    }
    
   
 componentDidMount(){
     this.getapidata.bind(this)
     
}
    getapidata(){
        
        axios.get('https://spreadsheets.google.com/feeds/list/1nHaaxjJnAR266tqjw8NBLeonHeCoMrX0lrKH7E2Grk8/od6/public/values?alt=json')
        .then(
            response =>{
                
                
                const i=Math.floor(Math.random()*6);
                console.log(response.data) 
                console.log(response.data.feed.entry[i])
                console.log(response.data.feed.entry[i].gsx$question.$t)
                console.log(response.data.feed.entry[i].gsx$answer.$t)
                console.log(response.data.feed.entry.length)
                
               
                this.setState({
   
                   question:  response.data.feed.entry[i].gsx$question.$t
                   
                  })
                
                  
                  this.setState({
   
                    optiona:  response.data.feed.entry[i].gsx$optiona.$t
                    
                   })
                   this.setState({
   
                    optionb:  response.data.feed.entry[i].gsx$optionb.$t
                    
                   })
                  
               
            }
   
        )
    }
        


    render() {
        
        return (
            <div>
               <h2>Question:{this.state.question}</h2>
               <h5><button onCLickoptionA></button>:{this.state.optiona}</h5>
               <h5><button onCLickoptionB></button>:{this.state.optionb}</h5>
               
               <button onClick={this.getapidata.bind(this)}>Next</button>
               
            </div>
        );
    }
}

export default Qandans;