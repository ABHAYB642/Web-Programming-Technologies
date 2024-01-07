import { useState } from "react"

export default function StringOperation(){
    let[original,setoriginal]=useState("String")
    let[modifiedstring,setmodified]=useState("Nan")
    let handler=(event)=>{
        let id=event.target.id;
        switch(id){
            case "upper" : {
                let s = original
                let s1 = s.toUpperCase()
                setmodified(s1)
                break;
            }
            case "lower" :{
                let s = original
                let s1 = s.toLowerCase()
                setmodified(s1)
                break;
            }
            case "title" :{
                let s = original
                let s1 = s.charAt(0).toUpperCase()
                let s2 = s.substring(1).toLowerCase()
                setmodified(s1+s2)
                break;
            }
            
            case "reverse":{
                let s =original
                let rev =""
                for(let i=s.length-1;i>=0;i--)
                {
                    rev+=s.charAt(i)
                }
                setmodified(rev)
            }
        }
           }
    return(
        <>
        <input type="text" placeholder="Enter String" onBlur={(event)=>{
            setoriginal(event.target.value)
        }}/>
        <br></br>
        Reverse: <input type="radio" name="Case" id="reverse"onChange={handler}/><br></br>
        UpperCase:<input type="radio" name="Case" id="upper" onChange={handler}/><br></br>
        LowerCase:<input type="radio" name="Case" id="lower" onChange={handler}/><br></br>
        TitleCase:<input type="radio" name="Case" id="title" onChange={handler}/><br></br>
        <p>{modifiedstring}</p>
        </>
    )

}


