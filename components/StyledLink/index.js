import styled from "styled-components";
import colors from "@/styles/colors";
import Link from "next/link";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${colors.typography[50]};
  &:hover {
    background-color: ${colors.primary[950]};
  }
`;

export default StyledLink;
