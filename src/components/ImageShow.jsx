import styled from "styled-components";
import LikeButton from "./buttons/LikeButton";
import PlusButton from "./buttons/PlusButton";

const ImageShow = ({ onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <Container>
        <Header>
          <ProfileSection>
            <ProfileImage />
            <UserName>사용자 이름</UserName>
          </ProfileSection>
          <ButtonGroup>
            <LikeButton />
            <PlusButton />
            <DownloadButton>
              <DownloadIcon>
                <path d="M19 11h-1.5V7.5C17.5 4.5 15 2 12 2S6.5 4.5 6.5 7.5V11H5c-0.6 0-1 0.4-1 1v9c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-9c0-0.6-0.4-1-1-1ZM8.5 7.5C8.5 5.6 10.1 4 12 4s3.5 1.6 3.5 3.5V11h-7V7.5Z" />
              </DownloadIcon>
              다운로드
            </DownloadButton>
          </ButtonGroup>
        </Header>
        <Main>안녕하세요</Main>
      </Container>
    </>
  );
};

export default ImageShow;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  cursor: zoom-out;
  z-index: 999;
  scrollbar-gutter: stable;
`;

const Container = styled.div`
  position: fixed;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90vh;
  background: white;
  z-index: 1000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #eee;
`;

const UserName = styled.span`
  font-size: 15px;
  line-height: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const DownloadButton = styled(IconButton)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: black;
  color: white;
  border: none;
  padding: 8px 12px;
  height: 32px;
  &:hover {
    background: #333;
  }
`;

const DownloadIcon = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "15",
  height: "15",
  fill: "currentColor",

  role: "graphics-symbol",
})`
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5c475c;
`;
