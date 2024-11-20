import styled from "styled-components";
import arrowDown from "../assets/hover_img/arrow-down.svg";

const DownloadButton = () => {
  return (
    <StyledButton>
      <img src={arrowDown} alt="다운로드" />
    </StyledButton>
  );
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

  img {
    width: 15px;
    height: 15px;
  }
`;

export default DownloadButton;
