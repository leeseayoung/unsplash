import styled from "styled-components";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import searchIcon from "../assets/search.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="로고" />
      </Logo>
      <SearchInput placeholder="사진과 일러스트 검색" />
      <NavList>
        <NavItem>탐색</NavItem>
        <NavItem>로그인</NavItem>
      </NavList>
      <MenuButton>
        <img src={menu} alt="메뉴" />
      </MenuButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  margin-right: 16px;
  font-size: 24px;
  font-weight: bold;
  img {
    width: 30px;
  }
`;

const SearchInput = styled.input`
  padding: 12px;
  padding-left: 40px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  flex: 1;
  height: 15px;
  background-color: #f0f0f0;
  background: #f0f0f0 url(${searchIcon}) no-repeat left 12px center/ 20px auto;
`;

const NavList = styled.ul`
  margin-left: 16px;
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 14px;
  color: #767676;
`;

const MenuButton = styled.button`
  padding-top: 8px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Header;
