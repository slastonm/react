import ComponentC from "./ComponentC"
function ComponentB(props){
    return(
        <div>
            <h1>
                ComponentB
            </h1>
            <h3>{props.userName}</h3>
            <ComponentC user={props.userName}></ComponentC>
        </div>
    )
}
export default ComponentB