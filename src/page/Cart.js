import React, { Fragment } from 'react';
import ShopContext from '../context/ShopContext';
import './index.css';
const Cart = () => {
  return (
    <div>
      <ShopContext.Consumer>
        {context =>
          context.cart.length > 0 ? (
            <Fragment>
              <table style={{ width: '50%' }}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                {context.cart.map(item => {
                  return (
                    <thead key={item.id}>
                      <tr>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td ><input type="number" value ={item.quantity} /></td>
                        <td>
                          <button
                            onClick={e => context.removeItemFromCart(item.id)}
                            style={{
                              backgroundColor: 'lightgray',
                              color: 'red'
                            }}
                          >
                            Remove from Cart
                          </button>
                        </td>
                      </tr>
                    </thead>
                  );
                })}
              </table>
              <table style={{ width: '50%' }}>
                <thead>
                  <tr style={{ fontSize: '30px' }}>
                    <td>Order Total</td>
                    <td>
                      $
                      {context.cart.reduce(
                        (pre, cur) => pre + cur.price * cur.quantity,
                        0
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            </Fragment>
          ) : (
            'Cart is empty. Kindly add item from Product page'
          )
        }
      </ShopContext.Consumer>
    </div>
  );
};
export default Cart;
