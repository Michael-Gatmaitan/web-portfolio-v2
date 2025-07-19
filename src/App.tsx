import { useState } from "react";
import Nav from "./components/nav";
import Home from "./sections/home";
import { AppContext } from "./AppContext";

function App() {
  const [appState, setAppState] = useState({
    isSidebarOpened: false,
  });

  const toggleSidebar = () => {
    setAppState((prev) => {
      return { ...prev, isSidebarOpened: !prev.isSidebarOpened };
    });
  };

  return (
    <AppContext value={appState}>
      <div className="p-4 lg:px-16 bg-bg w-full h-[1000vh]">
        <Nav />

        {/* <button onClick={toggleSidebar}> */}
        {/*   {appState.isSidebarOpened ? "TRUE" : "FALSE"} */}
        {/* </button> */}
        <Home />
      </div>
    </AppContext>
  );
}

export default App;
