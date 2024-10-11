import styled from "styled-components";

const MenuHeader = () => {
  const menuItems = ["사진", "일러스트", "Unsplash+"];
  const menuItem = [
    "3D 렌더링",
    "마리",
    "건축 및 인테리어",
    "실험적인",
    "패션 & 뷰티",
    "필름",
    "식음료",
    "자연",
    "사람",
    "스포츠",
    "여행하다",
    "라이징 스타",
  ];

  return (
    <Nav>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Menu>
      <Line />
      <Menu>
        {menuItem.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  padding: 0 20px;
  gap: 24px;
  align-items: center;
  height: 56px;
  box-shadow: 0 1px rgba(1, 0, 0, 0.12);
`;
const Line = styled.div`
  width: 1px;
  height: 32px;
  background: #d1d1d1;
  flex-shrink: 0;
`;

const Menu = styled.ul`
  gap: 24px;
  display: flex;
  list-style: none;
  padding: 0;
  white-space: nowrap;
`;

const MenuItem = styled.li`
  font-size: 14px;
  color: #767676;
  cursor: pointer;

  &:hover {
    color: black;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default MenuHeader;
