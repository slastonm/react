// useEfexct() - хук що спрацьовує коли ререндер компоненту, компонент Mount, та змінює стейт
// useEffect(function, [dependencies]) використовується в eventlistner, dom manipulating, subscription, fetch, clean up when component unmont


//useEffect(()=>) після кожного ререндеру
//useEffect(()=>{}, []) після mount
//useEffect(()=>{}, [value]) після кожного mount + зміни value
import React, {useState, useEffect} from "react";

function UseEfectComponent(){
    const [count, setCout] = useState(0);
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    // }); цей реагує на зміну
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    // },[]);
     // це створюється при завантажені сторінки і апдейтитися тільки раз

     useEffect(()=>{
        document.title = `Count ${count}`;
    },[count]);
    function addCount(){
        setCout(count => count+1);
    }
    return(
        <>
            <p>
                Count: {count}
                <button onClick={addCount}>Add</button>
            </p>
        </>
    )
}
export default UseEfectComponent;