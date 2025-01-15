import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty. Add some products!</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>
                            <strong>{item.title}</strong> x {item.quantity}
                        </p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                        <button
                            onClick={() => dispatch(removeFromCart({ id: item.id }))}
                            aria-label={`Remove one ${item.title}`}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
            {cart.length > 0 && <h3>Total: ${totalPrice.toFixed(2)}</h3>}
        </div>
    );
};

export default Cart;