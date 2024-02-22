import React from "react";
import styled from "styled-components";
import colors from "@/styles/colors";

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${colors.bg};
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: solid 3px ${colors.primary[700]};
  z-index: 10;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Timy Tracker</h1>
      <h1>Hello User!</h1>
    </StyledHeader>
  );
}
