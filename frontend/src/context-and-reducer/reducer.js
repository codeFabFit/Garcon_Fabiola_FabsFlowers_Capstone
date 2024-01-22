export const initialState = {

    total: 0,
    products: []
}


const storeReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            const newItem = action.payload;
            
            const existItem = state.CartView.product.find(
                (item) => item._id === newItem._id
                );
            const cartItems = existItem ? state.CartView.product.map((item) =>
            item._id === existItem._id ? newItem : item
            )
            : [...state.CartView.cartItem, newItem];
    
            return {...state, CartView:{...state.CartView, cartItems} }
    }        
        case 'USER_SIGNIN':
            return {
                ...state, 
                userInfo: action.payload
            }

        case "remove":
            return {
                ...state,
                products: action.payload
            }   
        case "update price": 
            return {
                ...state,
                total: action.payload    
        } 
        default: throw Error("cannot match")
    }
}

export default storeReducer;