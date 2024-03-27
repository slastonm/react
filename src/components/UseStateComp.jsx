import React, {useState} from "react";
function UseStateComp(){
    let [name, setName] = useState("Hello name");// array ( variable, setterFn) передаючи значення в usestate вказуємо базове значення
    const updateName = ()=>{
        // name = 'SpongeBob'
        setName('New value!!!')
    }

    let [age, setAge] = useState(0);
    const upAge = ()=>{
        // age++
        setAge(age+1)
        // setAge(age+1) викличе тільки один раз збільшення
        // setAge(age+1)
        
        // setAge(age=>age+1); для того щоб працювало
    
    }
    const downAge = ()=>{
        age--
        setAge(age)
    }

    let [inputValue, setInputValue] = useState('')
    function inputHandler(e){
        setInputValue(e.target.value);
    }

    let [shipping, setShiping] = useState('');
    function handlerShippingChange(e){
        setShiping(e.target.value)
    }
    return(
        <div>
            <label htmlFor="pickup">
                <input type="radio"
                 value="pick up"
                  name="pickup" 
                  id="pickup"
                  onChange={handlerShippingChange}
                  checked={shipping ==='pick up'} />
                Pick up
            </label>
            <label htmlFor="delivery">
                <input type="radio"
                 value="delivery"
                  name="delivery" 
                  id="delivery"
                  onChange={handlerShippingChange}
                  checked={shipping ==='delivery'} />
                Delivery
            </label>
            <p>
                Shipping: {shipping}
            </p>
            <hr />
            <input type="text" onChange={inputHandler} value={inputValue} />
            <p>
                User input: {inputValue}
            </p>
            <hr />
            <p>Name:{name}</p>
            <button onClick={updateName}>SetName!!</button>
            <hr />
            <p>Age {age}</p>
            <button onClick={upAge}>
                Up age
            </button>
            <button onClick={downAge}>
                Down age
            </button>
            <p>
                Is student born {age>0? 'yes':'no'}
            </p>
        </div>
    )
}
export default UseStateComp;