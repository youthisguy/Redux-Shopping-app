import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";


const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          {cartItems.map((Item) => (
        <li key={Item.id}>
          {" "}
            <CartItem quantity={Item.quantity} id={Item.id} price={Item.price} total={Item.totalPrice} name={Item.name} />
          {" "}
        </li>
          ))}
      </ul>
    </div>
  );
};

export default CartItems;
