function Box(props){
    return (
        <div onClick={()=>props.handleClick(props.id)}><h2>{props.value}</h2></div>
    )
}

export default Box