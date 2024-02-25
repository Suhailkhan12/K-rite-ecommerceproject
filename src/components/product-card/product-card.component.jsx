import './product-card.styles.scss'
import Button from '../button/button.component';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { useDispatch,useSelector } from 'react-redux';
import { addItemtoCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';




const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    // const {addItemtoCart} = useContext(CartContext);


    // const addProductToCart = () => addItemtoCart(product);
    const addProductToCart = () => dispatch(addItemtoCart(cartItems, product));  //product pass from jason


    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={ addProductToCart } >Add to card</Button>
        </div>
    );
};


export default ProductCard;