import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 45%;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    display: flex;
    flex-flow: column nowrap;
  }
`;

export default Layout;
