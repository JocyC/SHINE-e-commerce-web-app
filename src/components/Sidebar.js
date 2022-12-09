import React from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import Logo from "./Logo";
import CartButton from "./CartButton";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/resourses";
import { useThemeContext } from "../context/theme_context";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { theme } = useThemeContext();
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  console.log(isSidebarOpen);
  return (
    <Wrapper>
      <aside
        className={
          isSidebarOpen ? `sidebar show-sidebar ${theme}` : `sidebar ${theme}`
        }
      >
        <div className="sidebar-header">
          <Logo />
          <Switch />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
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
            <Link to="/checkout" onClick={closeSidebar} className={theme}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButton />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .light {
    background: var(--clr-white);
  }
  .dark {
    background: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
    margin-top: 0.2rem;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  sidebar-links {
    margin-bottom: 2rem;
    .light li {
      color: var(--clr-grey-3);
    }
    .dark li {
      color: var(--white);
    }
  }
  .sidebar-links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .sidebar-links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
export default Sidebar;
