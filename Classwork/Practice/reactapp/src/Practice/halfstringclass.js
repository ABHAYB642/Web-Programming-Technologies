import React from "react"
export default class Halfstring extends React.Component{
    constructor(){
        super();
        var a="";
        this.state={half:"Nothing yet"}
    }
    handler=()=>{
        this.setState({half:this.a.substring(0,(this.a.length)/2)});
    }
    render(){
        return(
            <div>
            String:<input type="text" placeholder="Enter a String" onBlur={(e)=>{this.a=e.target.value}}/>
            <input type="button" value="Convert" onClick={this.handler}/>
            <br></br>
            Half String is:<span>{this.state.half}</span>
            </div>
        )
    }

}