import React, {useContext} from "react"
import { UserContext } from "./ComponentA"
function ComponentC(props){
    // const age = useContext(UserContext)

    // const { user, age } = useContext(UserContext);
    const { user, age, changeUserName, changeAge } = useContext(UserContext);
    // function changeUserName(){
    //     setUser(user=>'New userName from componetn')
    // }
    // function changeAge(){
    //     setAge(age=>300);
    // }
    return(
        <div>
            <h1>
                ComponentC
            </h1>
            <h3>
               Test {user}
            </h3>
            <h4>
                User age {age}
            </h4>
            <hr />
            <button onClick={() => changeUserName('Updated UserName')}>Change User Name</button>
            <button onClick={() => changeAge(101)}>Change Age</button>
            <hr />
        </div>
    )
}
export default ComponentC