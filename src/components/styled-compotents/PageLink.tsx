import { Link } from "react-router-dom";
import styled from "styled-components";

interface PageLinkProps {
  active: boolean;
}

const PageLink = styled(Link)<PageLinkProps>`
  color: ${({ active }) => (active ? "#FFF" : " #707070")};
  text-decoration: none;
  text-decoration: none;
  transition: 250ms ease;
  position: relative;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  .page-name {
    display: inline-block;
    position: relative;
    transform: translateX(${({ active }) => (active ? "5rem" : "3rem")});
    transition: 250ms ease;

    &::before {
      content: "";
      position: absolute;
      left: ${({ active }) => (active ? "-4.3rem" : "-2.3rem")};
      top: 50%;
      background: #707070;
      height: 2px;
      width: ${({ active }) => (active ? "3.5rem" : "1.5rem")};
      border-radius: 4px;
      transition: 250ms ease;
    }
  }

  &:hover {
    color: #fff;

    .page-name {
      transform: translateX(5rem);

      &::before {
        left: -4.3rem;
        width: 3.5rem;
      }
    }
  }
`;

export default PageLink;
