import React from "react";
import styled from "styled-components";
import colors from "@/styles/colors";

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${colors.primary[950]};
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Timy Tracker</h1>
      <h1>Hello User!</h1>
    </StyledHeader>
  );
}
