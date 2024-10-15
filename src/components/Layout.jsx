import { Outlet } from "react-router-dom";
import Header from "./header";
import MenuHeader from "./MenuHeader";

const Layout = () => {
  return (
    <div>
      <Header />
      <MenuHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
