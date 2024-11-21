import styled from "styled-components";
import LikeBtn from "../../assets/hover_img/like.svg";

const LikeButton = () => {
  return (
    <StyledButton>
      <StyledImage src={LikeBtn} alt="이 이미지에 좋아요 표시" />
    </StyledButton>
  );
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
`;

const StyledImage = styled.img`
  width: 16px;
  height: 16px;
  filter: brightness(0) saturate(100%) invert(33%) sepia(0%) saturate(0%)
    hue-rotate(246deg) brightness(94%) contrast(86%); /* #555 색상 */

  ${StyledButton}:hover & {
    filter: brightness(0);
  }
`;

export default LikeButton;
