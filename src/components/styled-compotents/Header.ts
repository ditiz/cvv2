import styled from "styled-components";

const Header = styled.h1`
  font: normal normal bold 68px/83px Montserrat;
  & > *::before {
    content: "> ";
  }
`;

export default Header;
