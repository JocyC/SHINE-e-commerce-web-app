import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import error from "../assets/error.svg";

const Checkout = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <img src={error} alt="error pumpkin" />
        <h1>Checkout</h1>
        <h3>One step closer to happiness!</h3>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default Checkout;
