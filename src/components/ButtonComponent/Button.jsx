import style from './Button.module.css';
function ButtonComponent() {
    const custom = {
        backgroundColor: 'orange',
        color:'white',
        margin: '50px'
    }
    // До розділу події
    const handlerClick = ()=>{
        console.log('Test')
        alert(1);
    }
    const callName = (userName)=>{
        console.log(`Hello ${userName}`)
    }

    return ( 
        <>
            <button className={style.btn}>
                Hello module button
            </button>
            <button style={custom}>
                Hello
            </button>    

            {/* для подій         */}
            {/* <button onClick={(e)=> function(e){}}>
                Hello evetn
            </button> */}
        </>

     );
}

export default ButtonComponent;