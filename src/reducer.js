export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    switch(action.type) {

        //ACTION TO REMOVE FROM BASKET
        case 'REMOVE_FROM_BASKET':
            //Find the first item with the id of the item to delete
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket]
            if (index >=0) {
                //Chop off the item with that id
                newBasket.splice(index, 1)
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`)
            }

            //Return with updated basket
            return {
                ...state, 
                basket: newBasket
            };

        //ACTION TO ADD TO BASKSET
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            
        //ACTION TO UPDATE USER ON LOGIN/LOGOUT
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        default: 
            return state;
    }
}

export const getBasketTotal = (basket) => {
    // Optional chaining in case basket is empty
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

export default reducer;