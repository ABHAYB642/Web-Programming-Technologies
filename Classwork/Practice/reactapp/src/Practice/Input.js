import { useState } from "react"

export default function Inputfunc(){
    let [inital,setval]=useState(0);
    return(
    <div>
        <input type="text" onBlur={(event)=>{
            setval(event.target.value)
            }}/>
            <p>{inital}</p>
    </div>
    )
    
}
