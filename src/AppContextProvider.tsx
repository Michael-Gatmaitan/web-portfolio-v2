import { useState } from "react";
import { AppContext, type AppContextI } from "./AppContext";

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Put state values here & update the AppContextInterface in ./AppContext.ts

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const contextValue: AppContextI = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
