import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            // to check if item is already in cart
            const existingItems = state.itemsList.find((item) => item.id === newItem.id);

            if (existingItems) {
                existingItems.quantity++;
                existingItems.totalPrice += newItem.price;
            } else { 
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
                state.totalQuantity++;
            }
            
        },
        removeFromCart: (state, action) => { },
        setShowCart: (state, action) => {
            state.showCart = !state.showCart;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;