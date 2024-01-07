import { useRef, useState } from "react";

export default function Form(){
    let a=useRef("");
    let b=useRef("");
    let [result,setresult]=useState("");
    return(
        <>
        <form>
            Username: <input type="text" placeholder="Enter username" onChange={(e)=>{a.current=(e.target.value)}}/><br></br>
            Password: <input type="text" placeholder="Enter username"  onChange={(e)=>{b.current=(e.target.value)}}/><br></br>
            <input type="button" value="submit" onClick={()=>{setresult(a.current+b.current)}}/>
        </form>
        <p>{result}</p>
        </>
    )
}