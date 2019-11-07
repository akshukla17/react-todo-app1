import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductPage from './page/Product';
import CartPage from './page/Cart';
import MyContext from './context/ShopContext';
import Header from './components/Header';

class App extends Component {
  state = {
    products: [
      { id: 1, title: 'you can win', price: 20 },
      { id: 2, title: 'core Java', price: 12 },
      { id: 3, title: 'Data Structure and Algorithm', price: 40 },
      { id: 4, title: 'React learn', price: 21 }
    ],
    cart: [],
    cartQuantity: 0
  };
  addItemToCart = (id, quantity=1) => {
    let currentProduct = this.state.products.find(item => {
      return item.id === id;
    });
    let updatedCart = this.state.cart;
    let index;
    for (let item of updatedCart) {
      // console.log('item....', item);
      if (item.id === id) {
        index = id;
        item.quantity = item.quantity + quantity;
      }
    }
    if (index === undefined) {
      currentProduct.quantity = 1;
      updatedCart.push(currentProduct);
    }
    // console.log('update cart.....', updatedCart);
    this.setState(preState => ({
      cartQuantity: preState.cartQuantity + quantity,
      cart: updatedCart
    }));
  };
  removeItemFromCart = id => {
    const confirm = window.confirm('Do you want to delete this item ?');
    if (confirm) {
      const cartItem = this.state.cart;
      const updatedCart = cartItem.filter(item => {
        return item.id !== id;
      });
      // console.log('updated cart items: ', updatedCart);
      const updatedQuantity = updatedCart.reduce(
        (pre, cur) => pre + cur.quantity,
        0
      );

      this.setState({
        cart: updatedCart,
        cartQuantity: updatedQuantity
      });
    }
  };
  render() {
    // console.log('cart details: ', this.state.cart);
    return (
      <div className="App">
        <MyContext.Provider
          value={{
            products: this.state.products,
            cart: this.state.cart,
            addItemToCart: this.addItemToCart,
            removeItemFromCart: this.removeItemFromCart
          }}
        >
          <BrowserRouter>
            <h1>TODO App with React Context</h1>
            <Header />
            <p>Cart {this.state.cartQuantity}</p>
            <Route path="/" exact component={ProductPage} />
            <Route path="/cart" exact component={CartPage} />
          </BrowserRouter>
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
