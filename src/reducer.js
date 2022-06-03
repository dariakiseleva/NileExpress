export const initialState = {
    basket: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [... state.basket, action.item]
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