import { useEffect } from "react";
import Logout from "../components/auth/Logout";
import ResponsiveDrawer from "../components/drawer/ResponsiveDrawer";

const Home = (props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ResponsiveDrawer />
      <Logout />
    </>
  );
};

export default Home;
