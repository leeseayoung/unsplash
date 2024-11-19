import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuHeader from "./MenuHeader";

const Layout = () => {
  return (
    <>
      <FixedHeader>
        <Header />
        <MenuHeader />
      </FixedHeader>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.main`
  margin-top: 116px;
  /* padding: 20px; */
`;

export default Layout;
