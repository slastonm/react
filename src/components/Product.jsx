import PropTypes from 'prop-types';

function Product(props) {

    return ( 
        <div>
            <h1>
                Name {props.name}
            </h1>
            <h2>Price {props.price} $</h2>
            <h3>
                Discount {props.price > 300 ? 'yes':'no'}
            </h3>
            
        </div>
     );
}
Product.propTypes = {
    name:PropTypes.string,
    price:PropTypes.number
}
Product.defaultProps = {
    name:'No info',
    price:'No info'
}

export default Product;

