import React, { Fragment } from 'react';
import ShopContext from '../context/ShopContext';
import './index.css';
const Product = () => {
  return (
    <Fragment>
      <ShopContext.Consumer>
        {context => (
          <div className="products">
            <table style={{ width: '50%' }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              {context.products.map(prod => {
                return (
                  <thead key={prod.id}>
                    <tr>
                      <td className="prod-col">{prod.id}</td>
                      <td className="prod-col"> {prod.title}</td>
                      <td className="prod-col"> ${prod.price}</td>
                      <td>
                        <button
                          onClick={e => context.addItemToCart(prod.id)}
                          style={{ backgroundColor: 'lightgray', color: 'red' }}
                        >
                          Add to Cart
                        </button>
                      </td>
                    </tr>
                  </thead>
                );
              })}
            </table>
          </div>
        )}
      </ShopContext.Consumer>
    </Fragment>
  );
};
export default Product;
