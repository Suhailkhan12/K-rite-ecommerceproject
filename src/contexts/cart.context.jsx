// import { createContext, useState, useEffect, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";


// const addCartItem = (cartItems, productToAdd) => {
//     //find if cart item contain, product to Add
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


//     //if found, icrement Quantity

//     if(existingCartItem){
//         return cartItems.map((cartItem) =>
//          cartItem.id === productToAdd.id 
//           ? {...cartItem, quantity:cartItem.quantity + 1} 
//           : cartItem 
//         );
//     }

//     //return new array with modified cart item /new cart item
//     return [...cartItems,{...productToAdd, quantity:1 }]
// }


// const removeCartItem = (cartItems, cartItemToRemove) => {
//     // find the cart item to remove
//     const existingCartItem = cartItems.find(
//         (cartItem) => cartItem.id === cartItemToRemove.id
//     );


//     // check if quatity is equal to 1, if it is remove that item from the cart
//     if (existingCartItem.quantity === 1){
//         return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//     }


//     //return back cartitems with matching cart item with reducedd quntity
//     return cartItems.map((cartItem) =>
//         cartItem.id === cartItemToRemove.id 
//         ? {...cartItem, quantity:cartItem.quantity - 1} 
//         : cartItem 
//     );

// }

// const clearCartItem = (cartItems, cartItemToClear) => {
//     return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
// }


// export const CartContext = createContext({
//     isCartOpen:false,
//     setIsCartOpen: () => {},
//     cartItems:[],
//     addItemtoCart: () => {},
//     removeItemFromCart: () => {},
//     clearItemFromCart: () => {},
//     cartTotal: 0,
//     cartCount: 0
//     // setCartCount: () => {}
// })

// const CART_ACTION_TYPES = {
//     SET_CART_ITEMS: 'SET_CART_ITEMS',
//     SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
// }


// const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItems:[],
//     cartCount:0,
//     cartTotal:0,
// };


// const cartReducer = (state,action) => {
//     const { type, payload } = action;

//     // const payload = {
//     //     cartItems,
//     //     cartCount,
//     //     cartTotal
//     // }

//     switch(type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return {
//                 ...state,
//                 ...payload
//             };

//         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//             return {
//                 ...state,
//                 isCartOpen: payload,
//             };

//         default:
//             throw new Error(`unhandled type of ${type} in cartReducer`)
//     };
// };


// export const CartProvider = ({children}) => {
//     // const [isCartOpen, setIsCartOpen] = useState(false);
//     // const [cartItems,setCartItems] = useState([]);
//     // const [cartCount,setCartCount] = useState(0);
//     // const [cartTotal,setCartTotal] = useState(0);

//     const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);


//     // copy use Effect to update Cart Item Reducer

//     // useEffect(() => {
//     //     const newCartCount = cartItems.reduce(
//     //         (total, cartItem)=> total + cartItem.quantity, 
//     //         0
//     //     )
//     //     setCartCount(newCartCount);
//     // },[cartItems])

//     // useEffect(() => {
//     //     const newCartTotal = cartItems.reduce(
//     //         (total, cartItem)=> total + cartItem.quantity * cartItem.price, 
//     //         0
//     //     )
//     //     setCartTotal(newCartTotal);
//     // },[cartItems])


//     const updateCartItemsReducer = (newCartItems) => {

//         const newCartCount = cartItems.reduce(
//             (total, cartItem)=> total + cartItem.quantity, 
//             0
//         );

//         const newCartTotal = cartItems.reduce(
//             (total, cartItem)=> total + cartItem.quantity * cartItem.price, 
//             0
//         );
        

//         dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//             cartItems: newCartItems,
//             cartTotal: newCartTotal, 
//             cartCount: newCartCount
//           } )
            
//         //     { 
//         //  type:CART_ACTION_TYPES.SET_CART_ITEMS ,
//         //  payload: {
//         //     cartItems: newCartItems,
//         //     cartTotal: newCartTotal, 
//         //     cartCount:newCartCount
//         //   } 
//         // }
//         );
//     }

//     const setIsCartOpen = (bool) => {
//         // dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
//         dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//     }

//     const addItemtoCart = (productToAdd) =>  {
//         // setCartItems(addCartItem(cartItems, productToAdd));
//         const newCartItems = addCartItem(cartItems, productToAdd);
//         updateCartItemsReducer(newCartItems);
//     }

//     const removeItemToCart = (cartItemToRemove) =>  {
//         // setCartItems(removeCartItem(cartItems, cartItemToRemove));
//         const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//         updateCartItemsReducer(newCartItems);
//     }

//     const clearItemFromCart = (cartItemToClear) =>  {
//         // setCartItems(clearCartItem(cartItems, cartItemToClear));
//         const newCartItems = clearCartItem(cartItems, cartItemToClear);
//         updateCartItemsReducer(newCartItems);
//     }

//     const value = {
//         isCartOpen, 
//         setIsCartOpen, 
//         addItemtoCart, 
//         cartItems, 
//         cartCount, 
//         cartTotal,
//         removeItemToCart,
//         clearItemFromCart
//     };

//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }