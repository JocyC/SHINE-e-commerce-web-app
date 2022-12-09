import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../context/theme_context";
import Switch from "./Switch";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/resourses";
import CartButton from "./CartButton";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { theme } = useThemeContext();
  const { openSidebar } = useProductsContext();
  // const { myUser } = useUserContext();

  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo-container">
              <Logo />
              <Switch />
            </div>
            <button className="nav-toggle" type="button" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url} className={theme}>
                    {text}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/checkout" className={theme}>
                checkout
              </Link>
            </li>
          </ul>
          <CartButton />
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .nav-header {
    // place logo, switch, and sidebar toggle button
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container {
    // place logo and switch
    min-width: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
      .light li {
        color: var(--clr-grey-3);
      }
      .dark li {
        color: var(--white);
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
