import styled from "styled-components";
import LikeBtn from "../../assets/hover_img/like.svg";

const LikeButton = () => {
  return (
    <StyledButton>
      <img src={LikeBtn} alt="좋아요" />
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

export default LikeButton;
