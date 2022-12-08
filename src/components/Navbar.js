import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../context/theme_context";
import { Switch } from "antd";
const Navbar = () => {
  const { changeTheme } = useThemeContext();
  return (
    <Wrapper>
      <nav>
        <h2>Navbar</h2>
        <Switch onClick={changeTheme} />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;

export default Navbar;
