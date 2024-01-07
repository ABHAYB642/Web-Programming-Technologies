export default function ChildComponent(props){
    let[add]=props.props;
    return(
        <>
        {/* <input type="text" onBlur={(e)=>{props.props(e.target.value)}}/> */}
        <input type="text" onBlur={(e)=>{add(e.target.value)}}/>
        </>
    )
}