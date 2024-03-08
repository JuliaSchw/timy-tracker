import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { signOut, useSession } from "next-auth/react";

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

const SignOutButton = styled.button`
  background: none;
  border: none;
  color: ${colors.secondary[500]};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <StyledHeader>
      <h1>Timy Tracker</h1>
      {session ? (
        <div>
          <span>Hello, {session.user.surname || "User"}!</span>
          <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton>
        </div>
      ) : (
        <h1>Hello, Guest!</h1>
      )}
    </StyledHeader>
  );
};

export default Header;
