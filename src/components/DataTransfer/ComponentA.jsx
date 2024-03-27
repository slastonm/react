import React, {useState, createContext} from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState('Tester');
    const [age, setAge] = useState(100);
    function changeUserName(value){
        setUser(user=>value)
    }
    function changeAge(value){
        setAge(age=>value);
    }
    return(
        <div>
            <h1>
                ComponentA
            </h1>
            <h2>
                Hello {user}
            </h2>
            <button onClick={changeUserName}>
                Change name
            </button>
            <button onClick={changeAge}>
                Change age
            </button>
            {/* <UserContext.Provider value={age}>
                <ComponentB userName={user}></ComponentB>                
            </UserContext.Provider> */}
            {/* <UserContext.Provider value={{age, user}}>
                <ComponentB userName={user}></ComponentB>                
            </UserContext.Provider> */}
            <UserContext.Provider value={{ user, age, changeUserName, changeAge }}>
                <ComponentB />
            </UserContext.Provider>

        </div>
    )
}
export default ComponentA