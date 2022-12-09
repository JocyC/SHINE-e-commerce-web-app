import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useThemeContext } from "../context/theme_context";

import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButton = () => {
  const { theme } = useThemeContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/" className={`cart-btn ${theme}`}>
        Cart
        <span className={"cart-container"}>
          <FaShoppingCart />
          <span className="cart-value">0</span>
        </span>
      </Link>
      <button
        type="button"
        className={`auth-btn ${theme}`}
        onClick={() => console.log("login")}
      >
        Login
        <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: transparent;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    font-family: var(--font);
    svg {
      margin-left: 5px;
    }
  }
  .cart-btn {
    font-size: 1rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .light {
    color: var(--clr-grey-1);
  }
  .dark {
    color: var(--white);
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
`;
export default CartButton;
