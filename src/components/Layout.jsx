import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuHeader from "./MenuHeader";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <StickyHeader>
        <Header />
        <MenuHeader />
      </StickyHeader>
      <Outlet />
    </div>
  );
};

export default Layout;

const StickyHeader = styled.div`
  position: sticky;
  top: 0px;
  z-index: 10;
  background: white;
`;
