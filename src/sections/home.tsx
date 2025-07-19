import { useContext } from "react";
import { AppContext } from "../AppContext";

const Home = () => {
  const isSidebarOpened = useContext(AppContext).isSidebarOpened;

  return <div>Home {isSidebarOpened ? "TRUE" : "FALSE"}</div>;
};

export default Home;
