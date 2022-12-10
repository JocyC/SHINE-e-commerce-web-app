import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../context/theme_context";

const Contact = () => {
  const { theme } = useThemeContext();
  return (
    <Wrapper>
      <div className={`section-center ${theme}`}>
        <h3>join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            reprehenderit, voluptas nulla aperiam natus nam explicabo ducimus.
            Natus culpa harum voluptas aspernatur corporis veniam quidem,
            perspiciatis itaque. Et, saepe eligendi!
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter your email"
            />
            <button className="submit-btn" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;

  h3 {
    text-transform: capitalize;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    font-family: var(--font);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    background: var(--clr-grey-9);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`;

export default Contact;
