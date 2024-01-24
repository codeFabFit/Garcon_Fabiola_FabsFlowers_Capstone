export const initialState = {

    total: 0,
    products: [],
    userInfo: "",
}

const storeReducer = (state, action) => {
    const { type, payload} = action ;

    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload)
            return {
                ...state,
                products: payload.products
            }
            case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload)
            return {
                ...state,
                products: payload.products
            }
            case "UPDATE_PRICE":
            console.log("UPDATE_PRICE", payload)
            return {
                ...state,
                products: payload.total
            }
            default:
            throw new Error(`No case for type ${type} found in storeReducer`);
    }
}

// const storeReducer = (state, action) => {
//     switch (action.type) {
//         case "add": {
//             const newItem = action.payload;
            
//             const existItem = state.CartView.product.find(
//                 (item) => item._id === newItem._id
//                 );
//             const cartItems = existItem ? state.CartView.product.map((item) =>
//             item._id === existItem._id ? newItem : item
//             )
//             : [...state.CartView.cartItem, newItem];
    
//             return {...state, CartView:{...state.CartView, cartItems} }
//     }        
       

//         case "remove":
//             return {
//                 ...state,
//                 products: action.payload
//             }   
//         case "update price": 
//             return {
//                 ...state,
//                 total: action.payload    
//         } 

//  case 'USER_SIGNIN':
//             return {
//                 ...state, 
//                 userInfo: action.payload
//             }

//         default: throw Error("cannot match action type")
//     }
// }

export default storeReducer;