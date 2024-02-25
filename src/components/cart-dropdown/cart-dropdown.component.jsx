import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
// import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

const CardDropdown = () => {
    // const{isCartOpen, setIsCartOpen} = useContext(CartContext);
    // const {cartItems} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);


    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container animate-in'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Button onClick={ goToCheckoutHandler } >Go to Checkout</Button>
        </div>
        // <div className={`${ isCartOpen ? 'animate-in' : 'animate-out'} cart-dropdown-container`}>
        //     <div className='cart-items' />
        //     <Button>Go to Checkout</Button>
        // </div>
    )
}

export default CardDropdown;