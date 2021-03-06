import { Link } from "react-router-dom";
import styled from "styled-components";

interface PageLinkProps {
  current: 1 | 0;
}

const PageLink = styled(Link)<PageLinkProps>`
  color: ${({ current }) => (current ? "#FFF" : " #707070")};
  font-size: 20px;
  text-decoration: none;
  text-decoration: none;
  transition: 250ms ease;
  position: relative;
  display: flex;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  .page-key {
    width: 1.5rem;
  }

  .page-name {
    display: inline-block;
    position: relative;
    transform: translateX(
      ${({ current: active }) => (active ? "5rem" : "3rem")}
    );
    transition: 250ms ease;

    &::before {
      content: "";
      position: absolute;
      left: ${({ current }) => (current ? "-4.3rem" : "-2.3rem")};
      top: 35%;
      background: #707070;
      height: 2px;
      width: ${({ current }) => (current ? "3.5rem" : "1.5rem")};
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
