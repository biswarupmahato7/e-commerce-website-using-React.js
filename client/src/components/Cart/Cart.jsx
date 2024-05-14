import { MdClose } from "react-icons/md";

import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const handelPayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Your Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span className="text">Opps! Empty Cart &#128532;</span>
            <button className="return-cta">Buy Now</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal : </span>
                <span className="text total">&#8377; {cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handelPayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
