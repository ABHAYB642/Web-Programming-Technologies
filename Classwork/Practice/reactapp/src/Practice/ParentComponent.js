import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent(){
    let[arr,setarr]=useState([])
    function addtoarray(element){
        arr.push(element);
        setarr([...arr])
    }
    return(
        <> 
        <ol>
        {arr.map((element)=>{
            return <li>{element}</li>
        })}
        </ol>
        <ChildComponent props={[addtoarray]}></ChildComponent>
        </>
)
}