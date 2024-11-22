import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  children: React.ReactNode;
  ariaLabel: string;
}

const IconButton = ({ children, ariaLabel }: IconButtonProps) => {
  return <StyledButton aria-label={ariaLabel}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  background-color: #f5f5f5fa;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0 11px;

  &:hover {
    background-color: #ffffff;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #555;
  }

  &:hover svg {
    fill: #000;
  }
`;

export default IconButton;
