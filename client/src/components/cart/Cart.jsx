import React, { useContext, useState } from "react";
import "./Cart.scss";
import "./CartProduct";
import CartContext from "../../CartContext";
import CartProduct from "./CartProduct";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51ND7xWDLWL19aWHbSL3FI3uSVNR7ouOScD6mHs4Ub6Dffj5YFGgWlpEXYOIMNnBE099Joynv00mnjtmj4D9nFuqi00Wgoix9jd"
);

function Basket() {
  const { cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      const result = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });
      const data = await result.json();
      await stripe.redirectToCheckout({ sessionId: data.session_id });
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  if (error) {
    return (
      <p className="cart-page__error">
        Something went wrong when trying to proceed with payment
      </p>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <h2 className="cart-page__title">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="no-products">Your cart is empty</p>
        ) : loading ? (
          <p className="cart-page__loading">...Loading</p>
        ) : (
          <div className="cart-page__list">
            {cartItems?.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.img}
                price={product.price}
                count={product.count}
              />
            ))}
          </div>
        )}
        {cartItems.length !== 0 && (
          <button
            className="cart-page__button"
            onClick={() => {
              handlePayment();
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Basket;
