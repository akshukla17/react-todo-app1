import React from 'react';

const MyContext = React.createContext({
    products:[],
    cart:[],
    addItemToCart: () =>{},
    removeItemFromCart: ()=>{}
});

export default MyContext;