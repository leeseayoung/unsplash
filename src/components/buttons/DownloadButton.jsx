import styled from "styled-components";
import arrowDown from "../../assets/hover_img/arrow-down.svg";

const DownloadButton = () => {
  return (
    <StyledButton>
      <img src={arrowDown} alt="다운로드" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export default DownloadButton;
