import { useRef, useState } from "react";

export default function Calculate(){
    let a=useRef(0);
    let b=useRef(0);
    let [result,setresult]=useState(0);
    let [operation,setopeartion]=useState("+");
    return(
        <>
        <form>
            Num 1: <input type="number" placeholder="0" onChange={(e)=>{a.current=(e.target.value)}}/><br></br>
            Num 2: <input type="number" placeholder="0"  onChange={(e)=>{b.current=(e.target.value)}}/><br></br>
            <input type="button" value="Add" onClick={()=>{setresult(parseInt(a.current)+parseInt(b.current));setopeartion("+")}}/><br></br>
            <input type="button" value="Subtract" onClick={()=>{setresult(parseInt(a.current-b.current));setopeartion("-")}}/><br></br>
            <input type="button" value="Multiply" onClick={()=>{setresult(parseInt(a.current*b.current));setopeartion("*")}}/><br></br>
            <input type="button" value="Divide" onClick={()=>{setresult(parseInt(a.current/b.current));setopeartion("/")}}/><br></br>
        </form>
        <p>The Result is: {a.current}{operation}{b.current}={result}</p>
        </>
    )
}