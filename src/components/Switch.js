import React from "react";
import { Switch } from "antd";
import { useThemeContext } from "../context/theme_context";
import styled from "styled-components";

const SwitchButton = () => {
  const { theme, changeTheme } = useThemeContext();
  return (
    <Wrapper>
      <Switch
        onClick={changeTheme}
        className={`switch switch-theme-${theme}`}
      />
      {/* <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
    // max-width: 4rem;
    // display: grid;
    // justify-items: center;
    // grid-template-column: 1fr;
    // grid-template-rows: repeat(2, 1fr);
    // gap: 0.5rem;
    // span {
    //   font-size: 0.5rem;
    // }
    .switch {
      max-width: 3rem;
    }
    .switch-theme-light {
      background: var(--clr-primary-3);
    }
    .switch-theme-dark {
      background: var(--clr-primary-8);
    }
  }
`;

export default SwitchButton;
