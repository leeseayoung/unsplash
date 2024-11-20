import styled from "styled-components";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import searchIcon from "../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <HeaderContainer>
      <Logo to="/">
        <img src={logo} alt="로고" />
      </Logo>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder="사진과 일러스트 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchForm>
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
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: white; // 배경색을 추가하여 내용이 헤더 뒤로 비치지 않게 함
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled(Link)`
  margin-right: 16px;
  font-size: 24px;
  font-weight: bold;
  img {
    width: 30px;
  }
`;

const SearchForm = styled.form`
  flex-grow: 1;
`;

const SearchInput = styled.input`
  padding: 12px;
  padding-left: 40px;
  font-size: 14px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
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
