import axios from "axios";
export default function Fetchdata(){
    function handler(){
    // let promise=axios.get("https:reqres.in/api/users/2");
    // promise.then((response)=>{console.log(response.data)},(reject)=>{
    //     console.log('Something Wrong')
    // })}
    //OR
    // promise.then((response)=>{console.log(response.data)})
    // .catch((reject)=>{console.log("Something Wrong")})
    //OR
    axios.get("https:reqres.in/api/users/2").then((response)=>{console.log(response.data)}).catch((reject)=>{console.log("Something Wrong Buddy")})
}
    return(
        <>
        <input type="button" value="GET" onClick={handler}/>
        </>
    )
    }


