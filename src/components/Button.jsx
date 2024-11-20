import styled from "styled-components";

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Button;
