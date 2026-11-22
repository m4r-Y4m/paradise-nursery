import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  updateQuantity
} from '../redux/CartSlice';
import Navbar from './Navbar';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon!');
  };

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty!</h2>
            <p>Discover beautiful plants for your home.</p>

            <Link to="/plants" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-container">
              <div className="cart-items">
                {cartItems.map(item => (
                  <div className="cart-card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />

                    <div className="cart-details">
                      <h3>{item.name}</h3>

                      <p>
                        Unit Price: ${item.price.toFixed(2)}
                      </p>

                      <p>
                        Total: $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>

                      <div className="quantity-controls">
                        <button
                          onClick={() => handleDecrease(item)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => handleIncrease(item)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => handleRemove(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="cart-summary">
                <h2>Order Summary</h2>

                <p>
                  Total Items: {
                    cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )
                  }
                </p>

                <h3>
                  Total Amount: ${totalAmount.toFixed(2)}
                </h3>

                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

                <Link to="/plants" className="continue-btn">
                  Continue Shopping
                </Link>
              </aside>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default CartItem;
