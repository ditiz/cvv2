import styled from "styled-components";

interface ExternalLinkProps {
  color: string;
  noFontColor?: boolean;
}

const ExternalLink = styled.a<ExternalLinkProps>`
  text-decoration: none;
  color: ${({ color, noFontColor }) => (noFontColor ? "#FFF" : color)};
  cursor: pointer;
  position: relative;
  transition: 250ms ease;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      background: ${({ color }) => color};
      height: 3px;
      width: 100%;
      animation: grow 250ms ease;
    }
  }

  @keyframes grow {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }
`;

export default ExternalLink;
