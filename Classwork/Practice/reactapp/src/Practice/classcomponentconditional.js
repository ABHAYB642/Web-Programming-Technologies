import React from "react";
import EducationDetails from "./EducationDetails";
export default class Myclass extends React.Component{
    constructor(){
        super();
        this.state={flag:false}
    }
    render(){
        return (
       <div>
        <p>Name: Abhay</p>
        <p>Name: Abhay</p>
        <p>Name: Abhay</p>
        Show Eduacation: <input type="checkbox" onClick={(e)=>{this.setState({flag:e.target.checked})}}/>
        {this.state.flag && <EducationDetails></EducationDetails>}
        </div>
        )
        
    }

}