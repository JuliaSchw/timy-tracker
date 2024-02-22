import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: solid 3px ${colors.primary[700]};
  z-index: 10;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Timy Tracker</h1>
      <h1>Hello User!</h1>
    </StyledHeader>
  );
};

export default Header;
