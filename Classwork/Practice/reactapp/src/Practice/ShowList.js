import { useState } from "react";
export default function Displaylist(){
    let[tableflag,settableflag]=useState(false);
    let[olistflag,setolistflag]=useState(false);
    let[ulistflag,setulistflag]=useState(false);
    let arr=["red",["green"],["blue"],["yellow"],["orange"]]
    let[arr2,setarr2]=useState([]);
    function handler(choice){
        switch(choice){
            case "table":
                settableflag(true);
                setolistflag(false);
                setulistflag(false);
                arr2=arr.map((element)=>{
                    return <tr><td>{element}</td></tr>
                })
                setarr2(arr2);
                break;
            case "olist":
                setolistflag(true);
                settableflag(false);
                setulistflag(false);
                arr2=arr.map((element)=>{
                    return <li>{element}</li>
                })
                setarr2(arr2);
                break;
            case "ulist":
                setulistflag(true);
                setolistflag(false);
                settableflag(false);
                arr2=arr.map((element)=>{
                    return <li>{element}</li>
                })
                setarr2(arr2);
                break;
            default:
                break;
        }
    }
    return(
        <>
        <input type="radio" id="table" name="list" onClick={()=>handler("table")}/>
        <input type="radio" id="olist" name="list" onClick={()=>handler("olist")}/>
        <input type="radio" id="ulist" name="list" onClick={()=>handler("ulist")}/>
        {tableflag && <table border="1">{arr2}</table>}
        {olistflag && <ol>{arr2}</ol>}
        {ulistflag && <ul>{arr2}</ul>}
        </>
    )

}

