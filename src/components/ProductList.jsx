import React from 'react';
import PropTypes from 'prop-types';

ProductList.propTypes = {
    
};

function ProductList(props) {
    const values = [
        {name:'Orange',price:75}, 
        {name:'Banan',price:55}, 
        {name:'Kiwi',price:65}, 
        {name:'Salad',price:100}
    ];
        // values.sort((a,b)=>b.price-a.price)    
    // const lowCall = values.filter(fruit=>fruit.price>300);
    // const listItems = lowCall.map((item)=><li key={item.name}>{item.name} info {item.price}</li>)
    const listItems = values.map((item, index)=><li key={item.name}>{item.name} info {item.price}</li>)

    // const listItems = props.data.map((item, index)=><li key={item.name}>{item.name} info {item.price}</li>)


    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default ProductList;