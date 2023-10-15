import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
    carts : []
}

// cart Slice

const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        // add to cart
        addToCart:(state,action)=>{

            // Check the item Index
            const itemIndex = state.carts.findIndex((itme)=> itme.id === action.payload.id)

            // If item index is grater then 1 or eual to 1 then increse the quentity of the itme not add it 
            if (itemIndex >= 0){
                state.carts[itemIndex].qnty += 1;
            }else{
                // If item index is less then 1 or equal to 1 then add the itme into cart and set qnty 1. 
                const temp = {...action.payload, qnty:1}
                state.carts = [...state.carts, temp];
            }
            
        },

        // remove cart
        removeCart:(state,action)=>{
            const data = state.carts.filter((elm)=> elm.id !== action.payload); // don't need to write action.payload.id because we pass id from dispatch so payload get only ID not whole data
            state.carts = data;
        },

        // Decrease Quantity of Item in cart
        decQuantity:(state,action)=>{
            const decIndx_itme = state.carts.findIndex((item)=> item.id === action.payload.id);

            if(state.carts[decIndx_itme].qnty > 1){
                state.carts[decIndx_itme].qnty -= 1;
            }
        },

        // Empty Cart
        emptyCartItem:(state,action)=>{
            state.carts = [];
        }
    }
});

export const {addToCart,removeCart,decQuantity,emptyCartItem} = cartSlice.actions;

export default cartSlice.reducer;