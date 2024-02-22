import React from "react";
import styled from "styled-components";
import colors from "@/styles/colors";
import StyledLink from "../StyledLink";
import IconAcute from "@/styles/icon-acute";

const StyledNavigation = styled.ol`
  background-color: ${colors.bg};
  position: fixed;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-top: 35px;
  padding-left: 0;
  color: ${colors.typography[50]};
  border-right: solid 3px ${colors.primary[700]};
`;

const StyledListElement = styled.li`
  list-style: none;
`;

export default function SideNav() {
  return (
    <StyledNavigation>
      <StyledListElement>
        <StyledLink href={"/"}>
          <IconAcute />
        </StyledLink>
      </StyledListElement>
      <StyledListElement>
        <StyledLink href={"/"}>
          <IconAcute />
        </StyledLink>
      </StyledListElement>
      <StyledListElement>
        <StyledLink href={"/"}>
          <IconAcute />
        </StyledLink>
      </StyledListElement>
    </StyledNavigation>
  );
}
