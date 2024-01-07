import { useState } from "react"
import EducationDetails from "./EducationDetails"
export default function ConditionalRender(){
    let [flag,flagcheck]=useState(false)
    return(
        <>
        Name:<input type="text" placeholder="Enter name"/> <br></br>
        City:<input type="text" placeholder="Enter city"/>  <br></br>
        Address:<input type="text" placeholder="Enter address"/>  <br></br>
        Show Education:<input type="checkbox" onChange={(event)=>{
            flagcheck(event.target.checked)
        }}/>
         {flag && <EducationDetails></EducationDetails>}
        </>
    )

}

