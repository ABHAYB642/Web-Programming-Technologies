import { useState } from "react"

export default function MonthNamer(){
    let[name,setval]=useState("Select a Month")
    return (
        <>
        <select onChange={(event)=>{
            let choice=event.target.value
            switch(choice){
                case "1":setval("January");
                break;
                case "2":setval("February");
                break;
                case "3":setval("March");
                break;
                case "4":setval("April");
                break;
                case "5":setval("May");
                break;
                case "6":setval("June");
                break;
                case "7":setval("July");
                break;
                case "8":setval("August");
                break;
                case "9":setval("September");
                break;
                case "10":setval("October");
                break;
                case "11":setval("November");
                break;
                case "12":setval("December");
                break;
                default:
                setval("Select a Month")
            }
        }}>
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        </select>
        <p>{name}</p>
        </>
    )
    }
