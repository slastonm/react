import React, {useState} from "react";

function ProTodo(){
    const [products, setProducts] = useState([]);
    const [productYear, setProductYear] = useState(new Date().getFullYear());
    const [productMake, setProductMake] = useState("");
    const [productModel, setProductModel] = useState("");

    function addItem(){
        const newProduct = {
            year:productYear,
            make:productMake,
            model:productModel
        }
        setProducts(products=>[...products, newProduct]);

        //Remove values
        setProductMake('');
        setProductModel('')
    }
    function removeItem(indexEl){
        setProducts(products=> products.filter((_,index)=>index !=indexEl))
        
    }
    function changeYear(event){
        setProductYear(event.target.value)
    }
    function changeMake(event){
        setProductMake(event.target.value)
    }
    function changeModel(event){
        setProductModel(event.target.value)
    }
    return(
        <div>
            <h3>
                Product data
            </h3>
            <input type="text" placeholder="Production Year" value={productYear} onChange={changeYear} />
            <br />
            <input type="text" placeholder="Product maker" value={productMake} onChange={changeMake} />
            <br />
            <input type="text" placeholder="Product model" value={productModel} onChange={changeModel} />
            <br />
            <button onClick={addItem}>
                add item
            </button>
            <p>
                Product list
            </p>
            <ul>
                {products.map((item, index)=><li key={index} onClick={()=>removeItem(index)}>This is {item.model} {item.make} {item.year}</li>)}
            </ul>
            
        </div>
    );

}

export default ProTodo;